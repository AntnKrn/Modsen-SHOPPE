import { useEffect, useState } from 'react';
import { Input } from '../../components/Input/Input';
import {
  AuthForm,
  InputsField,
  SendButton,
  StyledAuthorizationMain,
  SwitchFormWrapper,
  Title,
} from './Authorization.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IAuthForm, authInitForm, authSchema } from './schemas';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/features/auth/authSlice';
import { useNavigate } from 'react-router';

export const Authorization = () => {
  const history = useNavigate();
  const auth = getAuth();
  const [isRegister, setIsRegister] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(authSchema) });
  const dispatch = useDispatch();
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(authInitForm);
    }
  }, [formState, reset]);

  const onSubmit = (data: IAuthForm) => {
    if (isRegister) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
          const busketRef = collection(db, 'busket');
          console.log(userCredential.user);
          await setDoc(doc(busketRef, userCredential.user.uid), {});
          dispatch(
            setUser({
              isAuth: true,
              email: userCredential.user.email,
              uuid: userCredential.user.uid,
              token: userCredential.user.refreshToken,
            }),
          );
          document.cookie = 'bearer=' + userCredential.user.refreshToken;
          history('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          dispatch(
            setUser({
              isAuth: true,
              email: userCredential.user.email,
              uuid: userCredential.user.uid,
              token: userCredential.user.refreshToken,
            }),
          );
          document.cookie = 'bearer=' + userCredential.user.refreshToken;
          history('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onClickSwitchForm = () => {
    reset(authInitForm);
    setIsRegister((prev) => !prev);
  };

  return (
    <StyledAuthorizationMain>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title>{isRegister ? <>Registration</> : <>Authorization</>}</Title>

        <InputsField>
          <Input
            placeholder="Email"
            name="email"
            reset={resetField}
            register={{ ...register('email') }}
            error={errors}
          />
          <Input
            placeholder="Password"
            name="password"
            reset={resetField}
            register={{ ...register('password') }}
            error={errors}
          />
        </InputsField>

        <SendButton type="submit" value={isRegister ? 'Sign up' : 'Sign in'} />
        <SwitchFormWrapper>
          {isRegister ? (
            <>
              <p>Already have an account?</p>
              <button type="button" onClick={() => onClickSwitchForm()}>
                Sign in with MODSEN SHOPPE
              </button>
            </>
          ) : (
            <>
              <p>New to MODSEN SHOPPE?</p>
              <button type="button" onClick={() => onClickSwitchForm()}>
                Create your MODSEN SHOPPE account
              </button>
            </>
          )}
        </SwitchFormWrapper>
      </AuthForm>
    </StyledAuthorizationMain>
  );
};
