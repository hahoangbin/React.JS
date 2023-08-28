import React, { Component } from 'react';

class LiveStream extends Component {
  componentDidMount() {
    const video = document.getElementById('video');

    // Truy cập camera và microphone
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Gán luồng vào phần tử video
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error('Lỗi truy cập camera và microphone: ', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Phát Trực Tiếp</h1>
        <video id="video" autoPlay playsInline />
      </div>
    );
  }
}

export default LiveStream;