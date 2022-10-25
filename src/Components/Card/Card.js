import React from "react";

const Card = ({
  crdt,
  setDetails,
  setBonus,
  setDuration,
  id,
  setId,
  setExam,
  instructor,
  setInstructor,
}) => {
  const { logo, name, time, number, teacher, Extra, task } = crdt;

  //   console.log(crdt);
  //   console.log(time);
  const handleButtonClick = () => {
    setDetails(name);
    setDuration(time);
    setExam(task);
    setInstructor(teacher);
    setBonus(Extra);
    setId(number);
    console.log(id);
  };
  return (
    <div>
      <button onClick={handleButtonClick} class='group relative block bg-black'>
        <img
          alt='Developer'
          src={logo}
          class='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
        />

        <div class='relative p-8'>
          <p class='text-sm font-medium uppercase tracking-widest text-pink-500'>
            Course
          </p>

          <p class='text-2xl font-bold text-white'>{crdt.name}</p>

          <div class='mt-64'>
            <div class='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
              <p class='text-sm text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Card;