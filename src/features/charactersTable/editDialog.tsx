import React, { useState } from 'react';

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/MultiSelect';

import { useAppDispatch } from '../../app/store';
import { updateCharacter } from '../../app/services/charactersApi';

import { CharacterType } from '../../types';

type EditDialogProps = {
  visible: boolean;
  selectedCharacter: CharacterType;
  onHide: () => void;
};

export default function EditDialog({ visible, selectedCharacter, onHide }: EditDialogProps): JSX.Element {
  let inputRef = React.createRef();
  const [categories, setCategories] = useState<string[]>(selectedCharacter?.c as string[]);

  const dispatch = useAppDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateCharacter({
        ...selectedCharacter,
        n: inputRef.current.value,
        c: categories,
      }),
    );
    onHide();
  };

  return (
    <Dialog className="w-96" header="Edit Character" visible={visible} onHide={onHide}>
      <form className="grid w-80" onSubmit={handleSubmit}>
        <div className="mt-2 justify-center space-y-8">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <InputText
                  className="h-18 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  defaultValue={selectedCharacter?.n}
                  ref={inputRef}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Categories
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <MultiSelect
                  className="h-18 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={categories}
                  onChange={(e: MultiSelectChangeEvent) => setCategories(e.value)}
                  options={selectedCharacter?.c}
                  optionLabel=""
                  placeholder="Select Categories"
                  maxSelectedLabels={3}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick={() => onHide()} type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </Dialog>
  );
}
