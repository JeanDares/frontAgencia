import { FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface InputFieldProps {
    control: any,
    name: string,
    label: string,
    placeholder: string
}

export const RegistrationInput = ({ control, name, label, placeholder }: InputFieldProps) => {
    return (
        <div className="mb-4">
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <div className="mb-4 mx-2">
                        <FormLabel className="block text-gray-700 text-sm font-bold mb-2">{label}</FormLabel>
                        <div className="mb-2">
                            <Input
                                placeholder={placeholder}
                                type="text"
                                {...field}
                                className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <FormMessage className="text-xs" />
                    </div>
                )}
            />
        </div>
    );
};

