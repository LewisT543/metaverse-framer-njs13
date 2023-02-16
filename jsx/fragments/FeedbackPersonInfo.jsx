
const FeedbackPersonInfo = ({ name, role, quote }) => (
  <>
    <div className="feedback-gradient" />
    <div>
      <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
        {name}
      </h4>
      <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
        {role}
      </p>
    </div>
    <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      {quote}
    </p>
  </>
)

export default FeedbackPersonInfo