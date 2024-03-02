import { FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface InputFieldProps {
    control: any,
    name: string,
    label: string,
    placeholder: string
}

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const InputField = ({ control, name, label, placeholder }: InputFieldProps) => {

    const capitalizedLabel = capitalizeFirstLetter(label);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="mb-4 mx-2">
                    <FormLabel className="block text-gray-700 text-sm font-bold mb-2">{capitalizedLabel}</FormLabel>
                    <div className="mb-2">
                        <Input
                            placeholder={"Digite seu " + placeholder}
                            type="text"
                            {...field}
                            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <FormMessage style={{ fontSize: '0.75rem', color: '#e53e3e' }} />


                </div>
            )}
        />
    );
};

export default InputField;
