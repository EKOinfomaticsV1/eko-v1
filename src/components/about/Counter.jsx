import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Counter = ({ target, title, duration }) => {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <span ref={ref}>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        separator=""
        useEasing={true}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
    </span>
  );
};

export default Counter;
