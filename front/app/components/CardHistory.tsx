import React from 'react';

type CardHistoryProps = {
  title: string;
  content: string;
};

const CardHistory = ({ title, content }: CardHistoryProps) => {
  // 会話履歴の内容を改行で分割し、それぞれの行を個別の段落として表示
  const lines = content.split('\n').map((line, index) => (
    <p key={index} style={{ margin: '5px 0' }}>{line}</p>
  ));

  return (
    <div className="card-history">
      <p className="card-title">{title}</p>
      <div className="card-content" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
        {lines}
      </div>
    </div>
  );
};

export default CardHistory;
