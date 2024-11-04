import { useCallback, useContext, useEffect, useState, useRef } from "react";
import VrmViewer from "@/components/vrmViewer";
import { ViewerContext } from "@/features/vrmViewer/viewerContext";
import {
  Message,
  textsToScreenplay,
  Screenplay,
} from "@/features/messages/messages";
import { speakCharacter } from "@/features/messages/speakCharacter";
import { MessageInputContainer } from "@/components/messageInputContainer";
import { SYSTEM_PROMPT } from "@/features/constants/systemPromptConstants";
import { KoeiroParam, DEFAULT_PARAM } from "@/features/constants/koeiroParam";
import { getOpenAIChatResponseStream } from "@/features/chat/openAiChat";
import { getAnthropicChatResponseStream } from "@/features/chat/anthropicChat";
import { getGoogleChatResponseStream } from "@/features/chat/googleChat";
import { getLocalLLMChatResponseStream } from "@/features/chat/localLLMChat";
import { getGroqChatResponseStream } from "@/features/chat/groqChat";
import { getDifyChatResponseStream } from "@/features/chat/difyChat";
import { Introduction } from "@/components/introduction";
import { Menu } from "@/components/menu";
import { Meta } from "@/components/meta";
import "@/lib/i18n";
import { useTranslation } from 'react-i18next';
import { fetchAndProcessComments } from "@/features/youtube/youtubeComments";
import { buildUrl } from "@/utils/buildUrl";

export default function Home() {
  const { viewer } = useContext(ViewerContext);

  const [systemPrompt, setSystemPrompt] = useState(SYSTEM_PROMPT);
  const [selectAIService, setSelectAIService] = useState("openai");
  const [selectAIModel, setSelectAIModel] = useState("gpt-4o");
  const [openAiKey, setOpenAiKey] = useState("");
  const [anthropicKey, setAnthropicKey] = useState("");
  const [googleKey, setGoogleKey] = useState("");
  const [groqKey, setGroqKey] = useState("");
  const [localLlmUrl, setLocalLlmUrl] = useState("");
  const [difyKey, setDifyKey] = useState("");
  const [difyUrl, setDifyUrl] = useState("");
  const [selectVoice, setSelectVoice] = useState("gsvitts");
  const [selectLanguage, setSelectLanguage] = useState("ZH");
  const [selectVoiceLanguage, setSelectVoiceLanguage] = useState("zh-TW");
  const [koeiromapKey, setKoeiromapKey] = useState("");
  const [voicevoxSpeaker, setVoicevoxSpeaker] = useState("2");
  const [googleTtsType, setGoogleTtsType] = useState(process.env.NEXT_PUBLIC_GOOGLE_TTS_TYPE && process.env.NEXT_PUBLIC_GOOGLE_TTS_TYPE !== "" ? process.env.NEXT_PUBLIC_GOOGLE_TTS_TYPE : "");
  const [stylebertvits2ServerUrl, setStylebertvits2ServerURL] = useState("http://127.0.0.1:5000");
  const [stylebertvits2ModelId, setStylebertvits2ModelId] = useState("0");
  const [stylebertvits2Style, setStylebertvits2Style] = useState("Neutral");
  const [youtubeMode, setYoutubeMode] = useState(false);
  const [youtubeApiKey, setYoutubeApiKey] = useState("");
  const [youtubeLiveId, setYoutubeLiveId] = useState("");
  const [conversationContinuityMode, setConversationContinuityMode] = useState(false);
  const [koeiroParam, setKoeiroParam] = useState<KoeiroParam>(DEFAULT_PARAM);
  const [chatProcessing, setChatProcessing] = useState(false);
  const [chatLog, setChatLog] = useState<Message[]>([]);
  const [codeLog, setCodeLog] = useState<Message[]>([]);
  const [assistantMessage, setAssistantMessage] = useState("");
  const [webSocketMode, changeWebSocketMode] = useState(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false); // WebSocketモード用の設定
  const { t } = useTranslation();
  const INTERVAL_MILL_SECONDS_RETRIEVING_COMMENTS = 5000; // 5秒
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(
    process.env.NEXT_PUBLIC_BACKGROUND_IMAGE_PATH !== undefined ? process.env.NEXT_PUBLIC_BACKGROUND_IMAGE_PATH : "/bg-c-0619.png"
  );
  const [dontShowIntroduction, setDontShowIntroduction] = useState(false);
  const [gsviTtsServerUrl, setGSVITTSServerUrl] = useState(process.env.NEXT_PUBLIC_LOCAL_TTS_URL && process.env.NEXT_PUBLIC_LOCAL_TTS_URL !== "" ? process.env.NEXT_PUBLIC_LOCAL_TTS_URL : "http://127.0.0.1:5000/tts");
  const [gsviTtsModelId, setGSVITTSModelID] = useState("");
  const [gsviTtsBatchSize, setGSVITTSBatchSize] = useState(2);
  const [gsviTtsSpeechRate, setGSVITTSSpeechRate] = useState(1.0);
  const [youtubeNextPageToken, setYoutubeNextPageToken] = useState("");
  const [youtubeContinuationCount, setYoutubeContinuationCount] = useState(0);
  const [youtubeNoCommentCount, setYoutubeNoCommentCount] = useState(0);
  const [youtubeSleepMode, setYoutubeSleepMode] = useState(false);
  const [chatProcessingCount, setChatProcessingCount] = useState(0);

  const incrementChatProcessingCount = () => {
    setChatProcessingCount(prevCount => prevCount + 1);
  };

  const decrementChatProcessingCount = () => {
    setChatProcessingCount(prevCount => prevCount - 1);
  }

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const storedData = window.localStorage.getItem("chatVRMParams");
    if (storedData) {
      const params = JSON.parse(storedData);
      setSystemPrompt(params.systemPrompt || SYSTEM_PROMPT);
      setKoeiroParam(params.koeiroParam || DEFAULT_PARAM);
      setChatLog(Array.isArray(params.chatLog) ? params.chatLog : []);
      setCodeLog(Array.isArray(params.codeLog) ? params.codeLog : []);
      setSelectAIService(params.selectAIService || "openai");
      setSelectAIModel(params.selectAIModel || "gpt-3.5-turbo");
      setOpenAiKey(params.openAiKey || "");
      setAnthropicKey(params.anthropicKey || "");
      setGoogleKey(params.googleKey || "");
      setGroqKey(params.groqKey || "");
      setLocalLlmUrl(params.localLlmUrl || "");
      setDifyKey(params.difyKey || "");
      setDifyUrl(params.difyUrl || "");
      setSelectVoice(params.selectVoice || "voicevox");
      setSelectLanguage(params.selectLanguage || "JP");
      setSelectVoiceLanguage(params.selectVoiceLanguage || "ja-JP");
      setKoeiromapKey(params.koeiromapKey || "");
      setVoicevoxSpeaker(params.voicevoxSpeaker || "2");
      setGoogleTtsType(params.googleTtsType || "en-US-Neural2-F");
      setYoutubeMode(params.youtubeMode || false);
      setYoutubeApiKey(params.youtubeApiKey || "");
      setYoutubeLiveId(params.youtubeLiveId || "");
      setConversationContinuityMode(params.conversationContinuityMode || false);
      changeWebSocketMode(params.webSocketMode || false);
      setStylebertvits2ServerURL(params.stylebertvits2ServerUrl || "http://127.0.0.1:5000");
      setStylebertvits2ModelId(params.stylebertvits2ModelId || "0");
      setStylebertvits2Style(params.stylebertvits2Style || "Neutral");
      setDontShowIntroduction(params.dontShowIntroduction || false);
      setGSVITTSServerUrl(params.gsviTtsServerUrl || "http://127.0.0.1:5000/tts");
      setGSVITTSModelID(params.gsviTtsModelId || "");
      setGSVITTSBatchSize(params.gsviTtsBatchSize || 2);
      setGSVITTSSpeechRate(params.gsviTtsSpeechRate || 1.0);
    }
    const script = document.createElement('script');
    script.src = '/js/bcq.js';
    script.async = true;
    document.body.appendChild(script);

    // // 在客戶端初始化窗口高度
    // setWindowHeight(window.innerHeight);

    const adjustHeight = () => {
      setWindowHeight(window.innerHeight);
      window.scrollTo(0, 0);
    };

    const handleResize = () => {
      adjustHeight();
      // 在這裡可以添加其他需要在 resize 時執行的邏輯
    };
  
    // 初始調整
    adjustHeight();

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // 當 windowHeight 改變時，我們可以在這裡更新 canvas 的大小
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = windowHeight;
      
      // 在這裡可以添加重新繪製 canvas 內容的邏輯
    }
  }, [windowHeight]);

  useEffect(() => {
    const params = {
      systemPrompt,
      koeiroParam,
      chatLog,
      codeLog,
      selectAIService,
      selectAIModel,
      openAiKey,
      anthropicKey,
      googleKey,
      groqKey,
      localLlmUrl,
      difyKey,
      difyUrl,
      selectVoice,
      selectLanguage,
      selectVoiceLanguage,
      koeiromapKey,
      voicevoxSpeaker,
      googleTtsType,
      youtubeMode,
      youtubeApiKey,
      youtubeLiveId,
      conversationContinuityMode,
      webSocketMode,
      stylebertvits2ServerUrl,
      stylebertvits2ModelId,
      stylebertvits2Style,
      dontShowIntroduction,
      gsviTtsServerUrl,
      gsviTtsModelId,
      gsviTtsBatchSize,
      gsviTtsSpeechRate
    };
    process.nextTick(() =>
      window.localStorage.setItem(
        "chatVRMParams", JSON.stringify(params)
      )
    );
  }, [
    systemPrompt,
    koeiroParam,
    chatLog,
    codeLog,
    selectAIService,
    selectAIModel,
    openAiKey,
    anthropicKey,
    googleKey,
    localLlmUrl,
    groqKey,
    difyKey,
    difyUrl,
    selectVoice,
    selectLanguage,
    selectVoiceLanguage,
    koeiromapKey,
    voicevoxSpeaker,
    googleTtsType,
    youtubeMode,
    youtubeApiKey,
    youtubeLiveId,
    conversationContinuityMode,
    webSocketMode,
    stylebertvits2ServerUrl,
    stylebertvits2ModelId,
    stylebertvits2Style,
    dontShowIntroduction,
    gsviTtsServerUrl,
    gsviTtsModelId,
    gsviTtsBatchSize,
    gsviTtsSpeechRate
  ]);

  const handleChangeChatLog = useCallback(
    (targetIndex: number, text: string) => {
      const newChatLog = chatLog.map((v: Message, i) => {
        return i === targetIndex ? { role: v.role, content: text } : v;
      });

      setChatLog(newChatLog);
    },
    [chatLog]
  );

  const handleChangeCodeLog = useCallback(
    async (targetIndex: number, text: string) => {
      const newCodeLog = codeLog.map((v: Message, i) => {
        return i === targetIndex ? { role: v.role, content: text} : v;
      });

      setCodeLog(newCodeLog);
    },
    [codeLog]
  );

  /**
   * 文ごとに音声を直列でリクエストしながら再生する
   */
  const handleSpeakAi = useCallback(
    async (
      screenplay: Screenplay,
      onStart?: () => void,
      onEnd?: () => void
    ) => {
      speakCharacter(
        screenplay,
        viewer,
        selectVoice,
        selectLanguage,
        koeiromapKey,
        voicevoxSpeaker,
        googleTtsType,
        stylebertvits2ServerUrl,
        stylebertvits2ModelId,
        stylebertvits2Style,
        gsviTtsServerUrl,
        gsviTtsModelId,
        gsviTtsBatchSize,
        gsviTtsSpeechRate,
        onStart,
        onEnd
      );
    },
    [
      viewer,
      selectVoice,
      selectLanguage,
      koeiromapKey,
      voicevoxSpeaker,
      googleTtsType,
      stylebertvits2ServerUrl,
      stylebertvits2ModelId,
      stylebertvits2Style,
      gsviTtsServerUrl,
      gsviTtsModelId,
      gsviTtsBatchSize,
      gsviTtsSpeechRate
    ]
  );

  const wsRef = useRef<WebSocket | null>(null);
  /**
   * AIからの応答を処理する関数
   * @param currentChatLog ログに残るメッセージの配列
   * @param messages 解答生成に使用するメッセージの配列
   */
  const processAIResponse = useCallback(async (currentChatLog: Message[], messages: Message[]) => {
    setChatProcessing(true);
    let stream;

    const _openAiKey = openAiKey && openAiKey !== "" ? openAiKey : process.env.NEXT_PUBLIC_OPEN_AI_KEY || "";
    const _anthropicKey = anthropicKey && anthropicKey !== "" ? anthropicKey : process.env.NEXT_PUBLIC_ANTHROPIC_KEY || "";
    const _googleKey = googleKey && googleKey !== "" ? googleKey : process.env.NEXT_PUBLIC_GOOGLE_KEY || "";
    const _localLlmUrl = localLlmUrl && localLlmUrl !== "" ? localLlmUrl : process.env.NEXT_PUBLIC_LOCAL_LLM_URL || "";
    const _selectAIModel = selectAIModel && selectAIModel !== "" ? selectAIModel : process.env.NEXT_PUBLIC_LOCAL_LLM_MODEL || "";
    const _groqKey = groqKey && groqKey !== "" ? groqKey : process.env.NEXT_PUBLIC_GROQ_KEY || "";
    const _difyKey = difyKey && difyKey !== "" ? difyKey : process.env.NEXT_PUBLIC_DIFY_KEY || "";
    const _difyUrl = difyUrl && difyUrl !== "" ? difyUrl : process.env.NEXT_PUBLIC_DIFY_URL || "";

    try {
      if (selectAIService === "openai") {
        stream = await getOpenAIChatResponseStream(messages, _openAiKey, selectAIModel);
      } else if (selectAIService === "anthropic") {
        stream = await getAnthropicChatResponseStream(messages, _anthropicKey, selectAIModel);
      } else if (selectAIService === "google") {
        stream = await getGoogleChatResponseStream(messages, _googleKey, selectAIModel);
      } else if (selectAIService === "localLlm") {
        stream = await getLocalLLMChatResponseStream(messages, _localLlmUrl, _selectAIModel);
      } else if (selectAIService === "groq") {
        stream = await getGroqChatResponseStream(messages, _groqKey, selectAIModel);
      } else if (selectAIService === "dify") {
        stream = await getDifyChatResponseStream(messages, _difyKey, _difyUrl);
      }
    } catch (e) {
      console.error(e);
      stream = null;
    }
    if (stream == null) {
      setChatProcessing(false);
      return;
    }

    const reader = stream.getReader();
    let receivedMessage = "";
    let aiTextLog = "";
    let tag = "";
    const sentences = new Array<string>();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        receivedMessage += value;

        // 檢測回應內容的標籤部分
        const tagMatch = receivedMessage.match(/^\[(.*?)\]/);
        if (tagMatch && tagMatch[0]) {
          tag = tagMatch[0];
          receivedMessage = receivedMessage.slice(tag.length);
        }

        // 將回應內容依照句子單位切分並處理
        const sentenceMatch = receivedMessage.match(
          /^(.+[。．！？\n]|.{10,}[、,])/
        );
        if (sentenceMatch && sentenceMatch[0]) {
          const sentence = sentenceMatch[0];
          sentences.push(sentence);
          receivedMessage = receivedMessage
            .slice(sentence.length)
            .trimStart();

          // 如果是不需要/無法發音的字串則跳過
          if (
            !sentence.replace(
              /^[\s\[\(\{「［（【『〈《〔｛«‹〘〚〛〙›»〕》〉』】）］」\}\)\]]+$/g,
              ""
            )
          ) {
            continue;
          }

          const aiText = `${tag} ${sentence}`;
          const aiTalks = textsToScreenplay([aiText], koeiroParam);
          aiTextLog += aiText;

          // 為每個句子生成並播放語音、顯示回應
          const currentAssistantMessage = sentences.join(" ");

          handleSpeakAi(aiTalks[0], () => {
            console.log("currentAssistantMessage:", currentAssistantMessage);

            const answerInput = document.getElementById('answerInput') as HTMLTextAreaElement;
            if (answerInput) {
              answerInput.value = currentAssistantMessage;
            }

            switch (answerInput?.getAttribute('data-answer-type')) {
              case 'age':
                // 分析回應中的年齡
                const ageMatch = currentAssistantMessage.match(/好的，您今年(\d+)歲/);
                if (ageMatch && ageMatch[1]) {
                  const ageInput = document.querySelector('input[name="age"]') as HTMLInputElement;
                  if (ageInput) {
                    ageInput.value = ageMatch[1];
                    answerInput.setAttribute('data-answer-type', 'ageget');
                  }
                }
                break;
                case 'sex':
                  // 分析回應中的年齡
                  const sexMatch = currentAssistantMessage.match(/好的，您的性別是?(.+)。/);
                  console.log("sexMatch:", sexMatch);
                  if (sexMatch && sexMatch[1]) {
                    // 判斷 sexMatch[1] 內容，如果是男或男生或男性則設定為 M，女或女生或女性則設定為 F
                    const sex = sexMatch[1];
                    if (sex === '男' || sex === '男生' || sex === '男性') {
                      const genderInput = document.querySelector('input[name="gender"][value="M"]') as HTMLInputElement;
                      if (genderInput) {
                        genderInput.checked = true;
                      }
                    } else if (sex === '女' || sex === '女生' || sex === '女性') {
                      const genderInput = document.querySelector('input[name="gender"][value="F"]') as HTMLInputElement;
                      if (genderInput) {
                        genderInput.checked = true;
                      }
                    }
                    answerInput.setAttribute('data-answer-type', 'sexget');
                  }
                  break;
                case 'height':
                  // 分析回應中的年齡
                  const heightMatch = currentAssistantMessage.match(/好的，您的身高是?(\d+)公分/);
                  console.log("heightMatch:", heightMatch);
                  if (heightMatch && heightMatch[1]) {
                    // 判斷 heightMatch[1] 內容
                    const heightInput = document.querySelector('input[name="height"]') as HTMLInputElement;
                    if (heightInput) {
                      heightInput.value = heightMatch[1];
                      answerInput.setAttribute('data-answer-type', 'heightget');
                    }
                  }
                  break;
                case 'weight':
                  // 分析回應中的體重
                  const weightMatch = currentAssistantMessage.match(/好的，您的體重是?(\d+)公斤/);
                  console.log("weightMatch:", weightMatch);
                  if (weightMatch && weightMatch[1]) {
                    // 判斷 weightMatch[1] 內容
                    const weightInput = document.querySelector('input[name="weight"]') as HTMLInputElement;
                    if (weightInput) {
                      weightInput.value = weightMatch[1];
                      answerInput.setAttribute('data-answer-type', 'weightget');
                    }
                  }
                  break;
            }
            setAssistantMessage(currentAssistantMessage);
            incrementChatProcessingCount();
          }, () => {
            decrementChatProcessingCount();
          });
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      reader.releaseLock();
    }

    // 將助理的回應加入記錄
    const messageLogAssistant: Message[] = [
      ...currentChatLog,
      { role: "assistant", content: aiTextLog },
    ];
    setChatLog(messageLogAssistant);
    setChatProcessing(false);
  }, [selectAIService, openAiKey, selectAIModel, anthropicKey, googleKey, localLlmUrl, groqKey, difyKey, difyUrl, koeiroParam, handleSpeakAi]);

  const preProcessAIResponse = useCallback(async (messages: Message[]) => {
    await processAIResponse(chatLog, messages);
  }, [chatLog, processAIResponse]);

  /**
   * 與助理進行對話
   */
  const handleSendChat = useCallback(
    async (text: string, role?: string) => {
      const newMessage = text;

      if (newMessage == null) {
        return;
      }

      if (webSocketMode) {
        // 未メンテなので不具合がある可能性あり
        console.log("websocket mode: true")
        setChatProcessing(true);

        if (role !== undefined && role !== "user") {
          // WebSocketからの返答を処理

          if (role == "assistant") {
            let aiText = `${"[neutral]"} ${newMessage}`;
            try {
              const aiTalks = textsToScreenplay([aiText], koeiroParam);

              // 文ごとに音声を生成 & 再生、返答を表示
              handleSpeakAi(aiTalks[0], async () => {
                // アシスタントの返答をログに追加
                const updateLog: Message[] = [
                  ...codeLog,
                  { role: "assistant", content: newMessage },
                ];
                setChatLog(updateLog);
                setCodeLog(updateLog);

                setAssistantMessage(newMessage);
                setIsVoicePlaying(false);
                setChatProcessing(false);
              });
            } catch (e) {
              setIsVoicePlaying(false);
              setChatProcessing(false);
            }
          } else if (role == "code" || role == "output" || role == "executing"){ // コードコメントの処理
            // ループ完了後にAI応答をコードログに追加
            const updateLog: Message[] = [
              ...codeLog,
              { role: role, content: newMessage },
            ];
            setCodeLog(updateLog);
            setChatProcessing(false);
          } else { // その他のコメントの処理（現想定では使用されないはず）
            console.log("error role:", role)
          }
        } else {
          // WebSocketで送信する処理

          if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            // ユーザーの発言を追加して表示
            const updateLog: Message[] = [
              ...codeLog,
              { role: "user", content: newMessage },
            ];
            setChatLog(updateLog);
            setCodeLog(updateLog);

            // WebSocket送信
            wsRef.current.send(JSON.stringify({content: newMessage, type: "chat"}));
          } else {
            setAssistantMessage(t('NotConnectedToExternalAssistant'));
            setChatProcessing(false);
          }
        }
      } else {
        // ChatVRM original mode
        if (selectAIService === "openai" && !openAiKey && !process.env.NEXT_PUBLIC_OPEN_AI_KEY ||
        selectAIService === "anthropic" && !anthropicKey && !process.env.NEXT_PUBLIC_ANTHROPIC_KEY ||
        selectAIService === "google" && !googleKey && !process.env.NEXT_PUBLIC_GOOGLE_KEY ||
        selectAIService === "groq" && !groqKey && !process.env.NEXT_PUBLIC_GROQ_KEY ||
        selectAIService === "dify" && !difyKey && !process.env.NEXT_PUBLIC_DIFY_KEY) {
          setAssistantMessage(t('APIKeyNotEntered'));
          return;
        }

        setChatProcessing(true);
        

        let messageLog: Message[] = [];
        let messages: Message[] = [];
        
        // 讀取 textarea 的 data-answer-type 屬性
        const answerInput = document.getElementById('answerInput') as HTMLTextAreaElement;
        if (answerInput) {
          switch (answerInput?.getAttribute('data-answer-type')) {
            case 'age':
              messageLog = [
                { role: "user", content: newMessage },
              ];
              messages = [
                {
                  role: "system",
                  content: `You will act and converse as one of user’s close friends from now on.
這邊是 user 對他年齡的回答，請你判斷他回答的年齡的數字，並且回答：「好的，您今年{年齡}歲」，不要講其他無關的話。

Please answer in Traditional Chinese and use Mandarin commonly used in Taiwan as much as possible.
Do not use polite or formal speech.
Now, let's start the conversation.
                  `,
                },
                ...messageLog,
              ];
              break;
            case 'sex':
              messageLog = [
                { role: "user", content: newMessage },
              ];
              messages = [
                {
                  role: "system",
                  content: `You will act and converse as one of user’s close friends from now on.
這邊是 user 對他性別的回答，請你判斷他回答的性別，並且回答：「好的，您的性別是{性別}」，不要講其他無關的話。

Please respond with the most appropriate conversation line.
Please answer in Traditional Chinese and use Mandarin commonly used in Taiwan as much as possible.
Do not use polite or formal speech.
                  `,
                },
                ...messageLog,
              ];
              break;
            case 'height':
              messageLog = [
                { role: "user", content: newMessage },
              ];
              messages = [
                {
                  role: "system",
                  content: `You will act and converse as one of user’s close friends from now on.
這邊是 user 對他身高的回答，請你判斷他回答的身高的數字，並且回答：「好的，您的身高是{身高}公分」，不要講其他無關的話。

Please respond with the most appropriate conversation line.
Please answer in Traditional Chinese and use Mandarin commonly used in Taiwan as much as possible.
Do not use polite or formal speech.
                  `,
                },
                ...messageLog,
              ];
              break;
            case 'weight':
              messageLog = [
                { role: "user", content: newMessage },
              ];
              messages = [
                {
                  role: "system",
                  content: `You will act and converse as one of user’s close friends from now on.
這邊是 user 對他體重的回答，請你判斷他回答的體重的數字，並且回答：「好的，您的體重是{體重}公斤」，不要講其他無關的話。

Please respond with the most appropriate conversation line.
Please answer in Traditional Chinese and use Mandarin commonly used in Taiwan as much as possible.
Do not use polite or formal speech.
                  `,
                },
                ...messageLog,
              ];
              break;
            default:
              messageLog = [
                ...chatLog,
                { role: "user", content: newMessage },
              ];
              messages = [
                {
                  role: "system",
                  content: systemPrompt,
                },
                ...messageLog.slice(-10),
              ];
              break;
          }
          setChatLog(messageLog);
        }

        try {
          await processAIResponse(messageLog, messages);
        } catch (e) {
          console.error(e);
        }
  
        setChatProcessing(false);
      }
    },
    [webSocketMode, koeiroParam, handleSpeakAi, codeLog, t, selectAIService, openAiKey, anthropicKey, googleKey, groqKey, difyKey, chatLog, systemPrompt, processAIResponse]
  );

  ///取得したコメントをストックするリストの作成（tmpMessages）
  interface tmpMessage {
    text: string;
    role: string;
    emotion: string;
  }
  const [tmpMessages, setTmpMessages] = useState<tmpMessage[]>([]);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      console.log("WebSocket connection opened:", event);
    };
    const handleMessage = (event: MessageEvent) => {
      console.log("Received message:", event.data);
      const jsonData = JSON.parse(event.data);
      setTmpMessages((prevMessages) => [...prevMessages, jsonData]);
    };
    const handleError = (event: Event) => {
      console.error("WebSocket error:", event);
    };
    const handleClose = (event: Event) => {
      console.log("WebSocket connection closed:", event);
    };

    function setupWebsocket() {
      const ws = new WebSocket("ws://localhost:3000/ws");
      ws.addEventListener("open", handleOpen);
      ws.addEventListener("message", handleMessage);
      ws.addEventListener("error", handleError);
      ws.addEventListener("close", handleClose);
      return ws;
    }
    let ws = setupWebsocket();
    wsRef.current = ws;

    const reconnectInterval = setInterval(() => {
      if (webSocketMode && ws.readyState !== WebSocket.OPEN && ws.readyState !== WebSocket.CONNECTING) {
        setChatProcessing(false);
        console.log("try reconnecting...");
        ws.close();
        ws = setupWebsocket();
        wsRef.current = ws;
      }
    }, 1000);

    return () => {
      clearInterval(reconnectInterval);
      ws.close();
    };
  }, [webSocketMode]);

  // WebSocketモード用の処理
  useEffect(() => {
    if (tmpMessages.length > 0 && !isVoicePlaying) {
      const message = tmpMessages[0];
      if (message.role == "assistant") { setIsVoicePlaying(true) };
      setTmpMessages((tmpMessages) => tmpMessages.slice(1));
      handleSendChat(message.text, message.role);
    }
  }, [tmpMessages, isVoicePlaying, handleSendChat]);

  // YouTubeコメントを取得する処理
  const fetchAndProcessCommentsCallback = useCallback(async() => {
    if (!openAiKey || !youtubeLiveId || !youtubeApiKey || chatProcessing || chatProcessingCount > 0) {
      return;
    }
    await new Promise(resolve => setTimeout(resolve, INTERVAL_MILL_SECONDS_RETRIEVING_COMMENTS));
    console.log("Call fetchAndProcessComments !!!");

    fetchAndProcessComments(
      systemPrompt,
      chatLog,
      openAiKey,
      selectAIModel,
      youtubeLiveId,
      youtubeApiKey,
      youtubeNextPageToken,
      setYoutubeNextPageToken,
      youtubeNoCommentCount,
      setYoutubeNoCommentCount,
      youtubeContinuationCount,
      setYoutubeContinuationCount,
      youtubeSleepMode,
      setYoutubeSleepMode,
      conversationContinuityMode,
      handleSendChat,
      preProcessAIResponse
    );
  }, [
    openAiKey,
    selectAIModel,
    youtubeLiveId,
    youtubeApiKey,
    chatProcessing,
    chatProcessingCount,
    systemPrompt,
    chatLog,
    youtubeNextPageToken,
    setYoutubeNextPageToken,
    youtubeNoCommentCount,
    setYoutubeNoCommentCount,
    youtubeContinuationCount,
    setYoutubeContinuationCount,
    youtubeSleepMode,
    setYoutubeSleepMode,
    conversationContinuityMode,
    handleSendChat,
    preProcessAIResponse
  ]);

  useEffect(() => {
    console.log("chatProcessingCount:", chatProcessingCount);

    if (chatProcessingCount < 1) {
      const answerInput = document.getElementById('answerInput') as HTMLTextAreaElement;
      if (answerInput) {
        switch (answerInput?.getAttribute('data-answer-type')) {
          case 'ageget':
            console.log("ageget");

            (window as any).bcqFunctions.fetchTTS("請告訴我你的性別是男生還是女生？", () => {
              answerInput.setAttribute('data-answer-type', 'sex');

              // 找到麥克風按鈕並觸發點擊
              const micButton = document.getElementById('voiceInput');
              if (micButton) {
                micButton.click();
              }
            });
            break;
          case 'sexget':
            console.log("sexget");

            (window as any).bcqFunctions.fetchTTS("請問您的身高多少公分？", () => {
              answerInput.setAttribute('data-answer-type', 'height');

              // 找到麥克風按鈕並觸發點擊
              const micButton = document.getElementById('voiceInput');
              if (micButton) {
                micButton.click();
              }
            });
            break;
          case 'heightget':
            console.log("heightget");

            (window as any).bcqFunctions.fetchTTS("請告訴我您的體重多少公斤？", () => {
              answerInput.setAttribute('data-answer-type', 'weight');
            });
            
            // 找到麥克風按鈕並觸發點擊
            const micButton = document.getElementById('voiceInput');
            if (micButton) {
              micButton.click();
            }
            break;
        }
      }
    }

    fetchAndProcessCommentsCallback();
  }, [chatProcessingCount, youtubeLiveId, youtubeApiKey, conversationContinuityMode]);

  useEffect(() => {
    if (youtubeNoCommentCount < 1) return;
    console.log("youtubeSleepMode:", youtubeSleepMode);
    setTimeout(() => {
      fetchAndProcessCommentsCallback();
    }, INTERVAL_MILL_SECONDS_RETRIEVING_COMMENTS);
  }, [youtubeNoCommentCount, conversationContinuityMode]);

  return (
    <>
      <div id="bcq" style={{ backgroundImage: `url(${buildUrl(backgroundImageUrl)})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <Meta />
        {/* {!dontShowIntroduction && (
          <Introduction
            dontShowIntroduction={dontShowIntroduction}
            onChangeDontShowIntroduction={setDontShowIntroduction}
            selectLanguage={selectLanguage}
            setSelectLanguage={setSelectLanguage}
            setSelectVoiceLanguage={setSelectVoiceLanguage}
          />
        )} */}
        <VrmViewer />
        <MessageInputContainer
          isChatProcessing={chatProcessing}
          onChatProcessStart={handleSendChat}
          selectVoiceLanguage={selectVoiceLanguage}
        />
        <Menu
          selectAIService={selectAIService}
          onChangeAIService={setSelectAIService}
          selectAIModel={selectAIModel}
          setSelectAIModel={setSelectAIModel}
          openAiKey={openAiKey}
          onChangeOpenAiKey={setOpenAiKey}
          anthropicKey={anthropicKey}
          onChangeAnthropicKey={setAnthropicKey}
          googleKey={googleKey}
          onChangeGoogleKey={setGoogleKey}
          groqKey={groqKey}
          onChangeGroqKey={setGroqKey}
          localLlmUrl={localLlmUrl}
          onChangeLocalLlmUrl={setLocalLlmUrl}
          difyKey={difyKey}
          onChangeDifyKey={setDifyKey}
          difyUrl={difyUrl}
          onChangeDifyUrl={setDifyUrl}
          systemPrompt={systemPrompt}
          chatLog={chatLog}
          codeLog={codeLog}
          koeiroParam={koeiroParam}
          assistantMessage={assistantMessage}
          koeiromapKey={koeiromapKey}
          voicevoxSpeaker={voicevoxSpeaker}
          googleTtsType={googleTtsType}
          stylebertvits2ServerUrl={stylebertvits2ServerUrl}
          stylebertvits2ModelId={stylebertvits2ModelId}
          stylebertvits2Style={stylebertvits2Style}
          youtubeMode={youtubeMode}
          youtubeApiKey={youtubeApiKey}
          youtubeLiveId={youtubeLiveId}
          conversationContinuityMode={conversationContinuityMode}
          onChangeSystemPrompt={setSystemPrompt}
          onChangeChatLog={handleChangeChatLog}
          onChangeCodeLog={handleChangeCodeLog}
          onChangeKoeiromapParam={setKoeiroParam}
          onChangeYoutubeMode={setYoutubeMode}
          onChangeYoutubeApiKey={setYoutubeApiKey}
          onChangeYoutubeLiveId={setYoutubeLiveId}
          onChangeConversationContinuityMode={setConversationContinuityMode}
          handleClickResetChatLog={() => setChatLog([])}
          handleClickResetCodeLog={() => setCodeLog([])}
          handleClickResetSystemPrompt={() => setSystemPrompt(SYSTEM_PROMPT)}
          onChangeKoeiromapKey={setKoeiromapKey}
          onChangeVoicevoxSpeaker={setVoicevoxSpeaker}
          onChangeGoogleTtsType={setGoogleTtsType}
          onChangeStyleBertVits2ServerUrl={setStylebertvits2ServerURL}
          onChangeStyleBertVits2ModelId={setStylebertvits2ModelId}
          onChangeStyleBertVits2Style={setStylebertvits2Style}
          webSocketMode={webSocketMode}
          changeWebSocketMode={changeWebSocketMode}
          selectVoice={selectVoice}
          setSelectVoice={setSelectVoice}
          selectLanguage={selectLanguage}
          setSelectLanguage={setSelectLanguage}
          setSelectVoiceLanguage={setSelectVoiceLanguage}
          setBackgroundImageUrl={setBackgroundImageUrl}
          gsviTtsServerUrl={gsviTtsServerUrl}
          onChangeGSVITtsServerUrl={setGSVITTSServerUrl}
          gsviTtsModelId={gsviTtsModelId}
          onChangeGSVITtsModelId={setGSVITTSModelID}
          gsviTtsBatchSize={gsviTtsBatchSize}
          onChangeGVITtsBatchSize={setGSVITTSBatchSize}
          gsviTtsSpeechRate={gsviTtsSpeechRate}
          onChangeGSVITtsSpeechRate={setGSVITTSSpeechRate}
        />
      </div>
    </>
  );
}
