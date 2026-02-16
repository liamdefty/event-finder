import { useForm } from 'react-hook-form';
import type { FieldValues, DefaultValues, FieldPath } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodTypeAny } from 'zod';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Label } from './ui/Typography';

type FieldConfig = {
  label: string;
  placeholder?: string;
  type: 'text' | 'email' | 'number' | 'date' | 'datetime-local' | 'textarea';
};

type FormConfig<T extends FieldValues> = {
  [K in keyof T]: FieldConfig;
};

interface SchemaFormProps<T extends FieldValues> {
  schema: ZodTypeAny;
  fieldConfig: FormConfig<T>;
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
}

export function SchemaForm<T extends FieldValues>({
  schema,
  fieldConfig,
  onSubmit,
  defaultValues,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  onCancel,
}: SchemaFormProps<T>) {
  const methods = useForm({
    resolver: zodResolver(schema as Parameters<typeof zodResolver>[0]),
    defaultValues,
  });

  const { register, formState: { errors }, reset } = methods;

  return (
    <form onSubmit={methods.handleSubmit(onSubmit as never)} className="space-y-4">
      {(Object.keys(fieldConfig) as Array<FieldPath<T>>).map((fieldName) => {
        const config = fieldConfig[fieldName as keyof T];
        const error = errors[fieldName]?.message as string | undefined;
        const fieldNameString = String(fieldName);

        return (
          <div key={fieldNameString}>
            <Label htmlFor={fieldNameString} className="mb-1">
              {config.label}
            </Label>
            {config.type === 'textarea' ? (
              <Textarea
                {...register(fieldName)}
                id={fieldNameString}
                placeholder={config.placeholder}
                error={error}
              />
            ) : (
              <Input
                {...register(fieldName)}
                id={fieldNameString}
                type={config.type}
                placeholder={config.placeholder}
                error={error}
              />
            )}
          </div>
        );
      })}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
        >
          {submitLabel}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={() => {
              reset();
              onCancel();
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-medium"
          >
            {cancelLabel}
          </button>
        )}
      </div>
    </form>
  );
}
