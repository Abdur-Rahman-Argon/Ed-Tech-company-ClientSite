import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogIn = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignUp = async () => {
    signInWithGoogle();
    const displayName = await gUser?.user?.displayName;
    const email = await gUser?.user?.email;
    const photoURL = await gUser?.user?.photoURL;

    // const user = {
    //   displayName,
    //   email,
    //   photoURL,
    // };

    // console.log(user, gUser);
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignUp}
        className="btn w-full my-2 flex items-center justify-center gap-3 bg-indigo-600 text-white"
      >
        SignUp with GooGle
      </button>
      <button className="btn w-full my-2 flex items-center justify-center gap-3 bg-indigo-600 text-white">
        <i class="fa-brands fa-facebook-square text-2xl"></i> SignUp with
        Facebook
      </button>
    </div>
  );
};

export default SocialLogIn;
