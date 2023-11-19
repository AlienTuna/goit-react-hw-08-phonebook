import React from 'react'
import { BtnStyled, FormStyled, InputStyled, LabelStyled, SpanStyledAsterisk, SpanStyledError } from './form.styled'
import { Container, SectionStyled } from 'components/App.styled'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signupThunk } from 'dal/requestUserAuth'

const SignUp = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (formData) => {
        dispatch(signupThunk(formData))
        // console.info('!!!Form Data on submit', formData)
        reset();
    }


    return (
        <SectionStyled>
            <h1>Register new user</h1>
            <Container>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>

                    <LabelStyled htmlFor="name">Name <SpanStyledAsterisk>*</SpanStyledAsterisk></LabelStyled>
                    <InputStyled type="text" placeholder='John Smith'
                        {...register("name", { required: 'Name is required' })}
                    />
                    {errors.name && <SpanStyledError>{errors.name.message}</SpanStyledError>}

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

                    <BtnStyled type='submit' onClick={null}>Register</BtnStyled>
                </FormStyled>
            </Container>
        </SectionStyled>
    )
}

export default SignUp