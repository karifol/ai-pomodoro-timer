export async function playNotificationSound() {
  try {
    // 通知音を鳴らす処理
    const audio = new Audio('/notification.mp3');

    // 音量
    audio.volume = 0.5; // 音量を50%に設定

    await audio.play();

    // 音声の再生が完了するまで待機
    return new Promise<void>((resolve) => {
      audio.onended = () => {
        resolve();
      };
    })
  } catch (error) {
    console.error('通知音の再生に失敗しました:', error);
  }
}