export default function WeatherDay(probs) {
  const d = probs.d
  return(
    <>
    <ul>
      <li>{d}일 후 오전 강수량</li>
      <li>{d}일 후 오후 강수량</li>
      <li>{d}일 후 오전 날씨예보</li>
      <li>{d}일 후 오후 날씨예보</li>
    </ul>
    </>
  );
}