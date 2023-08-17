const HEAD = (
  <div
    style={{
      height: "40px",
      width: "40px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-25px",
    }}
  />
)
const BODY = (
  <div
    style={{
      height: "80px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: 0,
    }}
  />
)
const RIGHT_ARM = (
  <div
    style={{
      height: "10px",
      width: "80px",
      background: "black",
      position: "absolute",
      top: "130px",
      right: "-80px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)
const LEFT_ARM = (
  <div
    style={{
      height: "80px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "55px",
      right: "0px",
      rotate: "-57deg",
      transformOrigin: "right bottom",
    }}
  />
)
const RIGHT_LEG = (
  <div
    style={{
      height: "10px",
      width: "80px",
      background: "black",
      position: "absolute",
      top: "170px",
      right: "-72px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)
const LEFT_LEG = (
  <div
    style={{
      height: "80px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "90px",
      right: "9px",
      rotate: "-157deg",
      transformOrigin: "right bottom",
    }}
  />
)
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps = {
  numberOfGuesses: number
}
export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "100px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "300px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "200px", background: "black" }}
      ></div>
    </div>
  )
}
