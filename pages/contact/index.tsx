import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
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
    email: yup.string().required(),
    subject: yup.string().email().required(),
  })
  .required()

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SendEmail>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
    },
  })

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

          <form className="flex flex-col lg:flex-row items-stretch justify-between w-full mt-10 lg:space-x-10">
            <div className="flex flex-col space-y-5">
              {inputData.map((input) => (
                <Controller
                  key={input.id}
                  name={input.name}
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      type={input.type}
                      id={input.id}
                      placeholder={input.placeholder}
                      {...field}
                      className="p-3 rounded-md bg-transparent border-slate-500 border focus:border-blue-400 transition-ease outline-0"
                    />
                  )}
                ></Controller>
              ))}
            </div>
            <Controller
              name="subject"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <textarea
                  placeholder="Message"
                  {...field}
                  className="w-full h-52 lg:h-auto mt-5 lg:mt-0 p-3 rounded-md bg-transparent border-slate-500 border focus:border-blue-400 transition-ease outline-0 resize-none"
                  maxLength={200}
                />
              )}
            ></Controller>
          </form>
          <button className="mt-10 w-full lg:w-fit border-2 border-blue-600 bg-stone-100 hover:bg-blue-600 hover:text-white dark:border-blue-600 rounded-full dark:bg-stone-800 px-10 py-2.5 dark:hover:bg-blue-600 transition-ease">
            Send Message
          </button>
        </div>
      </section>
    </div>
  )
}

export default Contact
