const Singup = () => {
  return (
    <div className="center h-screen">
      <div className="bg-white border-2 border-black h-3/4 w-1/4 rounded-md p-4 flex justify-center">
        <h3>Sign Up</h3>
        <div className="">
          <input name="username" className="border border-gray-800" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Singup;
