import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { schema } from './createNode.schema'
import classNames from 'classnames'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'

type FormInput = {
  name: string
}

type CreateNodeFormProps = {
  onSubmit: SubmitHandler<FormInput>
}

export const CreateNodeForm: FC<CreateNodeFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
  })

  return (
    <form id="create-node-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            className={classNames(
              'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              {
                'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500':
                  errors.name,
              }
            )}
            placeholder="Node's name"
            aria-describedby="name-description"
            onKeyDown={() => handleSubmit(onSubmit)}
            {...register('name')}
            autoFocus
          />
          {errors.name && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
        {errors.name ? (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errors.name.message}
          </p>
        ) : (
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            This will be your new node
          </p>
        )}
      </div>
    </form>
  )
}
