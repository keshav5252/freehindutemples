import { useState } from 'react'

const TemplesDirectory = () => {
  const [templeText, setTempleText] = useState('');

  const handleOnTextChange = (e) => {
    setTempleText(e.target.value);
  }

  return (
    <section className="td-container">
      <div className="td p-10 text-center">
        <form>
          <input type="text" className='w-full rounded-lg mt-2 bg-white' placeholder='Search any temple here from our directory' value={templeText} onChange={handleOnTextChange} autoComplete='false'/>
        </form>
      </div>
    </section>
  )
}

export default TemplesDirectory;
