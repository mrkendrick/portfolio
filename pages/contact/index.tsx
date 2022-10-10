import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Head from 'next/head'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { v4 } from 'uuid'
import * as yup from 'yup'
import PageTitle from '../../components/PageTitle'
import { contacts } from '../../data'
import { SendEmail } from '../../utils/types'

enum FieldNames {
  NAME = 'name',
  EMAIL = 'email',
  SUBJECT = 'subject',
}

const inputData = [
  {
    id: v4(),
    name: FieldNames.NAME,
    type: 'text',
    placeholder: 'Full Name',
  },
  {
    id: v4(),
    name: FieldNames.EMAIL,
    type: 'email',
    placeholder: 'Email Address',
  },
  {
    id: v4(),
    name: FieldNames.SUBJECT,
    type: 'text',
    placeholder: 'Subject',
  },
]

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required()

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    visible: false,
    message: '',
    error: false,
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<SendEmail>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const submit: SubmitHandler<SendEmail> = async (data) => {
    const { email, message, name, subject } = data

    setLoading(true)
    setError({ error: false, message: '', visible: false })

    try {
      await axios.post('/api/email', {
        from: `${name} <${email}>`,
        to: 'charlesrichson@gmail.com',
        message,
        subject,
      })

      reset({ email: '', message: '', name: '', subject: '' })

      setError({ error: false, message: 'Email sent!', visible: true })
    } catch (error) {
      setError({ error: true, message: 'Something went wrong!', visible: true })
    } finally {
      setLoading(false)

      setTimeout(() => {
        setError({ error: false, message: '', visible: false })
      }, 7000)
    }
  }

  return (
    <div>
      <Head>
        <title>Contact - Charles Duruaku</title>
      </Head>
      <PageTitle title="Contact" subTitle="Catch Me Outside 😉" />
      <section className="mt-28 container px-7 mx-auto flex flex-col lg:flex-row items-start space-y-16 lg:space-y-0 lg:space-x-14">
        <div className="flex flex-col space-y-10">
          {contacts.map((contact) => (
            <div className="flex items-center space-x-5" key={contact.id}>
              <span className="material-symbols-outlined text-5xl text-blue-500">
                {contact.icon}
              </span>
              <span className="font-semibold text-lg">{contact.text}</span>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-2xl">How Can I Help You?</h2>
            <div className="border-l-[4rem] border-blue-500 h-0.5"></div>
          </div>

          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col lg:flex-row items-stretch justify-between w-full mt-10 lg:space-x-10"
          >
            <div className="flex flex-col space-y-5">
              {inputData.map((input) => (
                <Controller
                  key={input.id}
                  name={input.name}
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      autoComplete="on"
                      type={input.type}
                      id={input.id}
                      placeholder={input.placeholder}
                      {...field}
                      className={`p-3 rounded-md bg-transparent ${
                        errors[input.name]?.message
                          ? 'border-red-500'
                          : 'border-slate-500'
                      } border ${
                        errors[input.name]?.message
                          ? 'focus:border-red-500'
                          : 'focus:border-blue-400'
                      } transition-ease outline-0`}
                    />
                  )}
                ></Controller>
              ))}
            </div>
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <textarea
                  autoComplete="on"
                  autoCorrect="on"
                  autoCapitalize="on"
                  placeholder="Message"
                  {...field}
                  className={`w-full h-52 lg:h-auto mt-5 lg:mt-0 p-3 rounded-md bg-transparent ${
                    errors.message?.message
                      ? 'border-red-500'
                      : 'border-slate-500'
                  } border ${
                    errors.message?.message
                      ? 'focus:border-red-400'
                      : 'focus:border-blue-400'
                  } transition-ease outline-0 resize-none`}
                  maxLength={200}
                />
              )}
            ></Controller>
          </form>
          <button
            disabled={loading}
            onClick={handleSubmit(submit)}
            className="mt-10 w-full lg:w-fit border-2 border-blue-600 disabled:bg-stone-600 disabled:text-gray-400 bg-stone-100 hover:bg-blue-600 hover:text-white dark:border-blue-600 rounded-full dark:bg-stone-800 px-10 py-2.5 dark:hover:bg-blue-600 transition-ease"
          >
            Send Message
          </button>
          {error.visible && (
            <div className="flex items-center space-x-2 mt-10">
              <span
                className={`text-xl font-semibold ${
                  error.error ? 'text-red-400' : 'text-green-400'
                }`}
              >
                {error.message}
              </span>
              <span
                className={`material-symbols-outlined text-3xl ${
                  error.error ? 'text-red-400' : 'text-green-400'
                }`}
              >
                {error.error ? 'close' : 'done'}
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Contact
