import { speakCharacter } from '../features/messages/speakCharacter'
import type { Talk, Screenplay } from '../features/messages/messages'
import homeStore from '../features/stores/home'

export const TestVoiceButton = (): JSX.Element => {
  const handleTestVoice = (): void => {
    const message = '這是一段測試語音'

    const talk: Talk = {
      message: message,
      speakerX: 0,
      speakerY: 0,
      style: 'talk',
    }

    const screenplay: Screenplay = {
      expression: 'neutral',
      talk: talk,
    }

    // 更新助理訊息
    homeStore.setState({
      assistantMessage: message,
    })

    speakCharacter(
      screenplay,
      () => console.log('開始播放'),
      () => console.log('播放結束')
    )
  }

  return (
    <button
      className="fixed bottom-64 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md z-10"
      onClick={handleTestVoice}
    >
      測試語音
    </button>
  )
}
