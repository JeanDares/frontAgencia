import { Control } from "react-hook-form";

type CheckFieldsProps = {
    id: string;
    label: string;
    options: string[]; // Lista de opções
    control: Control<any>;
    name: string;
    onChange: (selectedOption: string) => void; // Apenas a opção selecionada
};

export function CheckFields({ id, label, options, control, name, onChange }: CheckFieldsProps) {
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedOption = event.target.value;
        console.log('teste')
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="mt-1 flex items-center">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center mr-4">
                        <input
                            type="radio"
                            id={`${id}-${index}`}
                            {...control}
                            name={name}
                            value={option}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`${id}-${index}`} className="ml-2 block text-sm text-gray-900">{option}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}
