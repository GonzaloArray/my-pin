interface Props {
  status: number;
  index: number;
  title: string;
  content: string;
  prevGuide: () => void;
  nextGuide: () => void;
  handleClose: () => void;
}

export const StepIntroUser = ({ status, handleClose, prevGuide, nextGuide, index, title, content }: Props) => {


  return (
    <>
      <div className={`relative ${status === index ? 'z-50 bg-black w-[280px] h-[180px] border border-white p-3 flex flex-col justify-between' : 'hidden'}`}>
        <button onClick={handleClose} type="button" className="absolute right-4">✖</button>

        <h2>{title}</h2>
        <p>{content}</p>
        <div className='flex justify-between'>
          <button onClick={() => prevGuide()} type="button" className={`bg-white text-black p-2 w-[70px] rounded-lg ${index === 1 ? 'hidden' : ''}`}>
            Prev
          </button>
          <button onClick={() => nextGuide()} type="button" className=' bg-white text-black p-2 w-[70px] rounded-lg'>
            {
              index === 3 ? 'Finish' : 'Next'
            }
          </button>
        </div>
      </div>
    </>
  )
}
