
export default function App() {
  const blackPink = {
    groupName: "블랙핑크",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
    members: [
      {
        name: "리사",
        birthOfName: "라리사 마노반",
        age: 25,
        placeOfBirth: "태국 부리람 주",
      },
      {
        name: "지수",
        birthOfName: "김지수",
        age: 27,
        placeOfBirth: "군포시 산본동",
      },
      {
        name: "제니",
        birthOfName: "김제니",
        age: 26,
        placeOfBirth: "강남구 청담동",
      },
      {
        name: "로제",
        birthOfName: "박채영",
        age: 25,
        placeOfBirth: "뉴질랜드 오클랜드",
      },
    ],
  };

  return (
    <div
      //blackPink데이터를 이용해주세요
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      {/* blackPink 데이터를 이용해주세요 */}
      <h1>블랙핑크</h1>
      {/* 그룹의 멤버 수 blackPink 데이터를 이용해주세요 */}
      <h3>그룹의 멤버는 총 4명입니다.</h3>
      <ul>
        {/* blackPink 데이터를 이용해주세요 */}
        <li>제니</li>
        <li>본명:김제니</li>
        <li>나이:26</li>
        <li>출생지: 강남구 청담동</li>
      </ul>
      <ul>
        {/* blackPink 데이터를 이용해주세요 */}
        <li>지수</li>
        <li>본명:김지수</li>
        <li>나이:27</li>
        <li>출생지: 군포시 산본동</li>
      </ul>
      <ul>
        {/* blackPink 데이터를 이용해주세요 */}
        <li>로제</li>
        <li>본명:박채영</li>
        <li>나이:26</li>
        <li>출생지: 강남구 청담동</li>
      </ul>
      <ul>
        {/* blackPink 데이터를 이용해주세요 */}
        <li>리사</li>
        <li>본명: 라리사 마노반</li>
        <li>나이: 25</li>
        <li>출생지: 태국 부리람 주</li>
      </ul>
    </div>
  );
}
