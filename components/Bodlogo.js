// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return <Timer seconds={3} />;
// }
// const Timer = ({ seconds }) => {
//   const [timeLeft, setTimeLeft] = useState(seconds);
//   const [isPaused, setIsPaused] = UseState(false);

//   UseEffect(() => {
//     // if (isPaused) return;

//     if (timeLeft <= 0) return;

//     const intervalId = setInterval(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);
//     return () => clearInterval(intervalId);
//     //hezee ajilah
//   }, [timeLeft, isPaused]);
//   console.log("timeLeft", timeLeft);
//   console.log("isPaused", isPaused);

//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       {timeLeft}
//       <button onClick={() => setIsPaused(true)}>pause</button>
//       <button onClick={() => setIsPaused(false)}>continue</button>
//       <button onClick={() => setTimeLeft(seconds)}>reset</button>
//     </div>
//   );
// };
