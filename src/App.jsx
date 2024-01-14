import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Row, Col } from 'antd';
import { Layout } from 'antd';
const { Header, Footer } = Layout;

const App = () => {
  const topRef = useRef(null);
  const [targetOffset, setTargetOffset] = useState(); 
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/.netlify/functions/hello");
      const data = await response.json();
      console.log(data); 
      setMessage(data);
    };

    fetchData();

    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <Layout>
      <Header>
        <div>
          <img src="/imgs/2341704786947_.pic_hd.jpg" alt="Header" style={{ width: '70%', height: 'auto' }} /> 
        </div>
      </Header>
      <Row>
        <Col span={18}>
          <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)', marginTop: '30vh' }}>
            ウイスキーの歴史と製造技術 - Whisky Brewing Techniques and History
            <p>ウイスキーの起源と歴史は、多くの国や地域でさまざまな要素が結びついています</p>
            <p>ウイスキーの製造に関連する蒸留技術は、古代の文明に遡ります。アレキサンドリアの錬金術師たちがアルコールを蒸留する技術を発展させ、
              中世ヨーロッパに伝えました。この技術は、アルコールをより濃縮するのに役立ちました。ウイスキーの歴史において、
              スコットランドとアイルランドは重要な役割を果たしました。15世紀にスコットランドでウイスキーの製造が始まり、
              16世紀には法律によって規制されるようになりました。アイルランドでも同様にウイスキーが製造され、アイリッシュ・ウイスキーとして知られています。
              ウイスキーは19世紀から20世紀にかけて世界中に広まり、スコッチ・ウイスキー、アイリッシュ・ウイスキー、バーボンなど、さまざまなスタイルと味わいが存在します。
              ウイスキーは世界中で愛され、多くの国で製造されています。ウイスキーは製造地域、原料、蒸留方法、熟成期間、樽の種類などによって多様性があり、
              さまざまな風味を楽しむことができます。スモーキーでペアリーなスコッチ・ウイスキー、滑らかで甘いバーボン、
              複雑な風味を持つアイリッシュ・ウイスキーなど、個々の好みに合ったウイスキーがあります。</p>

            <li>原料の選定：</li>
            ウイスキーの原料として、大麦、トウモロコシ、ライ麦、小麦などの穀物が使用されます。また、麦芽（大麦を発芽させた後、乾燥させたもの）も主要な原料のひとつです。原料の組み合わせや割合によって、ウイスキーの味わいが異なります。
            <li>麦芽の製造：</li>
            大麦を水で浸し、発芽させます。発芽した大麦はオーブンで乾燥させ、麦芽としての形に戻します。これによってデンプンがアルコールに変換しやすくなります。
            <li>醸造：</li>
            麦芽や他の穀物を粉砕し、水と混ぜて麦汁を作ります。麦汁に酵母を加え、発酵させてアルコールを生成します。発酵過程では、アルコールとエステルなどの化合物が形成され、ウイスキーの風味に影響を与えます。
            <li>蒸留：</li>
            発酵された麦汁は蒸留装置にかけられます。ウイスキーは一般的に2回以上の蒸留を経て製造され、これによってアルコール度数を上げ、不要な成分を取り除きます。蒸留のプロセスによってウイスキーのベーススピリッツが生成されます。
            <li>熟成：</li>
            蒸留した新しいウイスキーは樽に詰められ、数年以上にわたって熟成させられます。樽内でウイスキーは風味を吸収し、色と香りが変化します。熟成に使用される樽の種類や以前の中身（シェリーやバーボンなど）によって風味が異なります。このステップがウイスキーに独特の特性を与えます。
            <li>調合とボトリング：</li>
            熟成が終了したウイスキーは調合され、異なる樽から取り出された液体が組み合わされて、特定の味わいや風味を持つウイスキーが作られます。最終的に、ボトルに詰められて販売されます。<br></br>
            <img src="/imgs/2331704785827_.pic_hd.jpg" alt="Header" style={{ width: '33%', height: 'auto' }} /> 
            <img src="/imgs/2321704785796_.pic_hd.jpg" alt="Header" style={{ width: '33%', height: '29.7%' }} /> 
            <img src="/imgs/img2.png" alt="Header" style={{ width: '33%', height: '29.7%' }} /> 
          </div>

          <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }}>
            産地と異なる風味 - Whisky Regions and Flavours
            <p>世界中のさまざまな地域で生産され、それぞれ独自の特徴と風味があります。主要なウイスキーの産地とそれらに関連付けられた典型的な風味のいくつかです</p>
            <p>スコットランド
              <li>ハイランド地方：花の香り、果物、ピートの香りなど、幅広い風味で知られています。Speysideなどの地域は、果物と麦の風味が豊かなウイスキーで有名です。</li>
              <li>アイラ島：強いピートと煙の香りで知られ、海の香りや薬草のようなニュアンスも感じられます。</li>
              <li>ローランド地方：一般的には軽やかで繊細なウイスキーで、花の香りや草の香りが特徴です。</li>
              <li>キャンベルタウン：塩気と海の香りがあり、甘さとピートの風味のバランスが取れたウイスキーで知られています。</li>
            </p>
            <p>アイルランド
              <li>アイリッシュ・ウイスキー：滑らかさと甘さが特徴で、バニラ、ハチミツ、フルーツのニュアンスが感じられます。</li>
            </p>
            <p>アメリカ
              <li>バーボン：主にケンタッキー州で生産され、甘く、フルボディでキャラメルの風味、時にはスパイスのニュアンスがあります。</li>
              <li>テネシー・ウイスキー：バーボンに似ていますが、通常はリンカーン郡プロセスとして知られる追加の木炭ろ過プロセスを経ており、より滑らかで柔らかい味わいになります。</li>
              <li>ライ・ウイスキー：スパイシーな味わいが特徴で、黒胡椒、シナモン、時にはフルーツのニュアンスが感じられます。</li>
            </p>
            <p>カナダ
              <li>日本のウイスキー：バランスと精密さが評価され、デリケートでフルーティなものからスモーキーでピートの風味があるものまで、幅広い風味があります。</li>
            </p>
            <p>各地域内で、さまざまなウイスキーのスタイルと風味が存在し、個々の蒸留所が独自の表現を生み出しています。さまざまな地域のウイスキーを試飲することで、この愛されるスピリッツの幅広い風味と香りを探求できます。<br></br></p>
            <img src="/imgs/img4.png" alt="Header" style={{ width: '33%', height: '40%' }} />
            <img src="/imgs/JPw.png" alt="Header" style={{ width: '33%', height: '40.5%' }} />
            <img src="/imgs/USw.png" alt="Header" style={{ width: '33%', height: '40.2%' }} />
          </div>
          <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
            代表的な初心者向け製品 - Iconic Whiskies for Beginners
            <p>
            ウイスキーの初心者向けとして、以下はいくつかの代表的な製品です。これらのウイスキーは比較的手頃な価格で、飲みやすく、多くの場所で入手可能です。初めてウイスキーを試す方にお勧めです。
            <li>ジャック・ダニエルズ・オールド・No. 7</li>
            アメリカのテネシー・ウイスキーで、ジャック・ダニエルズは世界中で非常に人気があります。そのスムーズで甘い風味は、初心者にとっても魅力的です。
            <li>ジェームソン・アイリッシュ・ウイスキー</li>
            アイルランドのジェームソンは、軽やかでスムーズなウイスキーとして知られており、バニラやハチミツのような甘い風味があります。
            <li>ファンデンバーグ 1820 スコッチ・ウイスキー</li>
            スコットランドのスコッチ・ウイスキーで、手頃な価格帯でありながら、ミルクチョコレートやオークの風味が楽しめます。
            <li>ブッシュミルズ・オリジナル</li>
            アイルランドのブッシュミルズは、フルーティで軽やかな風味が特徴で、初心者に向いています。
            <li>カナディアン・クラブ 100% リアル・リアックト</li>
            カナダのカナディアン・クラブは、滑らかで軽やかなウイスキーで、バニラとメープルシロップの風味が感じられます。
            <li>ザ・グレンリベット 12年</li>
            スコットランドのシングルモルト・スコッチ・ウイスキーで、フルーツとハニーの風味が楽しめる初心者向けの選択肢です。
            </p>
            <img src="/imgs/2351704791923_.pic.jpg" alt="Header" style={{ width: '33%', height: '40%' }} />
            <img src="/imgs/2361704791969_.pic.jpg" alt="Header" style={{ width: '33%', height: '40%' }} />
            <img src="/imgs/2371704792046_.pic.jpg" alt="Header" style={{ width: '33%', height: '40%' }} />
            <img src="/imgs/2381704792082_.pic.jpg" alt="Header" style={{ width: '33%', height: '40%' }} />
            <img src="/imgs/2391704792112_.pic.jpg" alt="Header" style={{ width: '33%', height: '40%' }} />
            <img src="/imgs/2401704792203_.pic.jpg" alt="Header" style={{ width: '33%', height: '40%' }} />
          </div>
        </Col>
        <Col span={6}>
          <Anchor targetOffset={targetOffset} items={[
            { key: 'part-1', href: '#part-1', title: 'ウイスキーの製造技術と歴史' },
            { key: 'part-2', href: '#part-2', title: '産地と異なる風味' },
            { key: 'part-3', href: '#part-3', title: '代表的な初心者向け製品' },
          ]} />
        </Col>
      </Row>

      <div
        style={{
          height: '30vh',
          background: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          color: '#FFF',
        }}
        ref={topRef}
      >
        <p>ウイスキーの製造と歴史は古代文明から始まり、特にスコットランドとアイルランドで発展しました。
          製造過程には原料選定、麦芽製造、醸造、蒸留、熟成、そして調合とボトリングが含まれます。
          ウイスキーは原料、製法、熟成方法、樽の種類によって多様な風味が生まれ、スコッチ、アイリッシュ、
          バーボンなど様々な種類があります。</p>
          <p>世界のウイスキー産地はそれぞれ特有の風味を持っています。
            スコットランドではハイランド、アイラ、ローランド、キャンベルタウンなどの地域があり、
            それぞれ異なる特徴を持ちます。アイルランドのウイスキーは滑らかで甘い風味が特徴です。
            アメリカではバーボン、テネシー・ウイスキー、ライ・ウイスキーがあり、それぞれ独自の味わいがあります。
            カナダや日本のウイスキーも世界的に評価されています。
            </p>
      </div>
      <Footer>
        {message.map((item, index) => (
          <div key={index}>
            <p>{item.school}    {item.myName}</p>
            
          </div>
        ))}
      </Footer>
    </Layout>

  );
};

export default App;