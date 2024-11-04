import { MessageInput } from "@/components/messageInput";
import { useState, useEffect, useCallback } from "react";

type Props = {
  isChatProcessing: boolean;
  onChatProcessStart: (text: string) => void;
  selectVoiceLanguage: string;
};

/**
 * 提供文字輸入和語音輸入
 *
 * 當語音辨識完成時自動發送，當生成回覆文字時無效化輸入
 *
 */
export const MessageInputContainer = ({
  isChatProcessing,
  onChatProcessStart,
  selectVoiceLanguage
}: Props) => {
  const [userMessage, setUserMessage] = useState("");
  const [speechRecognition, setSpeechRecognition] =
    useState<SpeechRecognition>();
  const [isMicRecording, setIsMicRecording] = useState(false);

  // 處理語音辨識結果
  const handleRecognitionResult = useCallback(
    (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript;
      setUserMessage(text);

      // 當語音辨識完成時
      if (event.results[0].isFinal) {
        setUserMessage(text);

        // 檢查 textarea 的 data-answer-type 屬性
        const answerInput = document.getElementById('answerInput') as HTMLTextAreaElement;
        // 清除 textarea 的值
        if (answerInput) {
          answerInput.value = '';
        }

        switch (answerInput?.getAttribute('data-answer-type')) {
          case 'name2':
            const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
            if (nameInput) {
              nameInput.value = text;
              setTimeout(() => {
                setUserMessage('');
              }, 1000);

              // 呼叫 bcq.js 中的函數
              (window as any).bcqFunctions.fetchTTS("你今年幾歲?", () => {
                const answerInput = document.getElementById('answerInput');
                if (answerInput) {
                  // 設置 data-input-type 屬性的值 = name
                  answerInput.setAttribute('data-answer-type', 'age');

                  // 找到麥克風按鈕並觸發點擊
                  const micButton = document.getElementById('voiceInput');
                  if (micButton) {
                    micButton.click();
                  }

                  // 找到年齡輸入框並設置焦點
                  const ageInput = document.querySelector('input[name="age"]') as HTMLInputElement;
                  if (ageInput) {
                    ageInput.focus();
                  }
                }
              });
            }
            break;
          // case 'age':
          //   // 開始生成回覆文字
          //   onChatProcessStart(text);
          //   // const ageInput = document.querySelector('input[name="age"]') as HTMLInputElement;
          //   // if (ageInput) {
          //   //   ageInput.value = text;
          //   // }
          //   break;
          default:
            // 開始生成回覆文字
            onChatProcessStart(text);
            break;
        }

        // // 開始生成回覆文字
        // onChatProcessStart(text);
      }
    },
    [onChatProcessStart]
  );

  // 當持續沒有聲音時也會結束
  const handleRecognitionEnd = useCallback(() => {
    setIsMicRecording(false);
  }, []);

  const handleClickMicButton = useCallback(() => {
    if (isMicRecording) {
      speechRecognition?.abort();
      setIsMicRecording(false);

      return;
    }

    speechRecognition?.start();
    setIsMicRecording(true);
  }, [isMicRecording, speechRecognition]);

  const handleClickSendButton = useCallback(() => {
    onChatProcessStart(userMessage);
  }, [onChatProcessStart, userMessage]);

  useEffect(() => {
    const SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;

    // FirefoxなどSpeechRecognition非対応環境対策
    if (!SpeechRecognition) {
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = selectVoiceLanguage;
    recognition.interimResults = true; // 認識の途中結果を返す
    recognition.continuous = false; // 発言の終了時に認識を終了する

    recognition.addEventListener("result", handleRecognitionResult);
    recognition.addEventListener("end", handleRecognitionEnd);

    setSpeechRecognition(recognition);
  }, [handleRecognitionResult, handleRecognitionEnd, selectVoiceLanguage]);

  useEffect(() => {
    if (!isChatProcessing) {
      setUserMessage("");
    }
  }, [isChatProcessing]);

  return (
    <MessageInput
      userMessage={userMessage}
      isChatProcessing={isChatProcessing}
      isMicRecording={isMicRecording}
      onChangeUserMessage={(e) => setUserMessage(e.target.value)}
      onClickMicButton={handleClickMicButton}
      onClickSendButton={handleClickSendButton}
    />
  );
};
