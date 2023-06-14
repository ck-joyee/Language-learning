function AllinstructorCard({instructor}) {
  return (
    <div>
        <div className='flex space-x-4 mb-2 border p-5'>
        <img style={{borderRadius:'0 200px 0 200px'}} className='w-[120px]' src={instructor.image} alt="" />
        <div className='pl-10'>
            <h3 className='uppercase'>{instructor.name} </h3>
            <p>{instructor.email}</p>
        </div>
    </div>
        </div>
  )
}

export default AllinstructorCard