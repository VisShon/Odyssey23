import EventButton from './EventButton';
function Event({ name, tagline, bg, image, align, knowmore, knowmoreList }) {
  let alignVal = align % 2 === 0 ? 'left' : 'right';
  return (
    <>
      <div
        className={` leading-[4vw] sm:h-[36vw] md:h-[36vw] lg:h-[31vw] xl:h-[28.0vw] h-[37vw] w-screen transition-timing-function-[ease-in] rounded-t-2xl -mt-2 shadow-lg translate-y-[0.1vw] duration-[1000ms] transform transition-all `}
        style={{ borderTop: '5px solid #000000', textShadow: '1px 1px 10px rgba(0,0,0,0.7)', backgroundImage: 'url("/Texture.png")'}}
      >
        {name && (
          <img
            className={`  drop-shadow-[5px_5px_0px_#000] sm:h-[30vw] md:h-[30vw] lg:h-[25vw] xl:h-[24vw] h-[30vw] translate-y-[1.5vw] duration-[1000ms] transform transition-all ${
              alignVal === 'left'
                ? '2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-5 ml-8 mr-[6vw]'
                : '2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-5 ml-8 mr-[6vw]'
            } `}
            src={image}
            alt="image"
            style={{ float: alignVal }}
          />
        )}
        <div
          className={`ml-[10vw] xl:mt-[6vw]  mr-[8vw] lg:mt-[3vw] md:mt-[4vw] sm:mt-[2.4vw] mt-[6vw] leading-[5vw] `}
        >
          <div
            className={`  translate-y-[0.1 vw] duration-[1200ms] 2xl:text-5xl  lg:text-2xl md:text-xl xl:text-3xl sm:text-sm text-[5.5vw] sm:mt-4`}
          >
            {name}
          </div>
          <div
            className={`font-italic mt-1 mr-[1vw] text-[1.5vw] leading-[2.5vw] transition-delay-[10s] translate-y-[1vw] duration-[100ms] lg:text-xl sm:text-[2vw] md:text-xs sm:mr-1 2xl:text-md `}
          >
            {knowmore}
          </div>
          <div className="btn" style={{ color: 'rgba(0,0,0,0.7)' }}>
            {name && (
              <EventButton name={name} image={image} list={knowmoreList} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Event;
