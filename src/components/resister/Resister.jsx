import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyAuthContext } from '../../Context/Context';

const Resister = () => {
  const { errorMsg, setErrorMsg, createUser, setCurrentUser } =
    useContext(MyAuthContext);

  //create user firebase email and password
  const handleResister = (event) => {
    event.preventDefault();
    setErrorMsg(null);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMsg('password not matched!');
    } else {
      createUser(email, password)
        .then((result) => {
          setCurrentUser(result.user);
          form.reset();
          // console.log(result.user);
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    }
  };
  return (
    <>
      <div className='p-10'>
        <section className='max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300'>
          <h1 className='text-4xl font-medium'>Resister</h1>
          <p className='text-slate-500 pt-1'>Hey, Welcome!</p>

          <form onSubmit={handleResister} className='my-10'>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='email'>
                <p className='font-medium text-slate-700 pb-2'>Email</p>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='sample.email@gmail.com'
                />
              </label>
              <label htmlFor='password'>
                <p className='font-medium text-slate-700 pb-2'>Password</p>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='******'
                />
              </label>
              <label htmlFor='confirmPassword'>
                <p className='font-medium text-slate-700 pb-2'>
                  Confirm password
                </p>
                <input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  required
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='******'
                />
                <p>
                  <small className='text-red-700 mt-2 font-serif ms-1'>
                    {errorMsg && errorMsg}
                  </small>
                </p>
              </label>

              <button className='w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center'>
                <span>Resister</span>
              </button>
              <p className='text-center'>
                Already have an account?{' '}
                <button className='text-indigo-600 font-medium inline-flex space-x-1 items-center'>
                  <Link to={'/login'}>
                    <span className='hover:underline'>Login</span>
                  </Link>
                </button>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Resister;

//password validation code here in div
// <div> password validation
//   if (password !== confirmPassword) {
//     setErrorMsg('password not matched!');
//   } else if (!/(?=.*[0-9])/.test(password)) {
//     setErrorMsg('password must contain a single digit from 1 to 9');
//   } else if (!/(?=.*[a-z])/.test(password)) {
//     setErrorMsg('password must contain one lowercase letter');
//   } else if (!/(?=.*[A-Z])/.test(password)) {
//     setErrorMsg('password must contain one uppercase letter');
//   } else if (!/(?=.*\W)/.test(password)) {
//     setErrorMsg('password must contain one special character');
//   } else if (password.length < 8) {
//     setErrorMsg('password must be 8 characters');
//   }
// </div>
