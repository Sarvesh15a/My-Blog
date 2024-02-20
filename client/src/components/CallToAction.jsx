import { Button } from 'flowbite-react';

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
            Want to know more about REC Sonbhadra?
        </h2>
        <p className='text-gray-500 my-2'>
            Checkout these resources .
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="http://recsonbhadra.ac.in/" target='_blank' rel='noopener noreferrer'>
               Click here to know
            </a>
        </Button>
    </div>
    <div className="p-7 flex-1">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" />
    </div>
</div>
  )
}

export default CallToAction