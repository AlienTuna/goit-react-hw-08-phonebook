import { Container, SectionStyled } from 'components/App.styled'
import React from 'react'
import { BtnStyled, FormStyled, InputStyled, LabelStyled, SpanStyledAsterisk, SpanStyledError } from './form.styled'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from 'dal/requestUserAuth'


const Login = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = async (formData) => {
        await dispatch(loginThunk(formData))
        reset();
      }

    return (
        <SectionStyled>
        <h1>Log in</h1>
            <Container>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>
                    
                <LabelStyled htmlFor="email">Email <SpanStyledAsterisk>*</SpanStyledAsterisk></LabelStyled>
                    <InputStyled type="email" placeholder='example@mail.com'
                        {...register("email", {
                            required: 'Email is required',
                            pattern: {
                                value: new RegExp('[a-z0-9.]+@[a-z]+.[a-z]{2,3}'),
                                message: 'Must contain correct e-mail'
                            }
                        })}
                    />
                    {errors.email && <SpanStyledError>{errors.email.message}</SpanStyledError>}

                    <LabelStyled htmlFor="password">Password <SpanStyledAsterisk>*</SpanStyledAsterisk></LabelStyled>
                    <InputStyled type="password" placeholder='••••••••' {...register("password", {
                        required: 'Password is required',
                        minLength: {
                            value: 7,
                            message: 'Password must contain minimum 7 characters'
                        }
                    })} />
                    {errors.password && <SpanStyledError role='alert'>{errors.password.message}</SpanStyledError>}

                    <BtnStyled type='submit' onClick={null}>Log in</BtnStyled>
                </FormStyled>
            </Container>
        </SectionStyled>
    )
}

export default Login