import React, { useState } from 'react';
import {updateCharacter, useGetCharactersQuery} from '../../app/services/charactersApi';
import { CharacterType } from '../../types';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { COLUMNS, SEVERITY_VARIANTS } from '../../app/constants';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import EditDialog from './editDialog';

import { useAppDispatch } from '../../app/store';
import { deleteCharacter } from '../../app/services/charactersApi';

export default function CharactersTable() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);
  const { data, isLoading } = useGetCharactersQuery()<{
    isLoading: boolean;
    data: CharacterType;
  }>;
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data) {
    return <div>No posts :(</div>;
  }

  const categoryTemplate = (rowData) => {
    return rowData?.c?.map((c, index) => {
      return <Tag className="mr-1" key={c} severity={SEVERITY_VARIANTS[index]} value={c} />;
    });
  };

  const actionsTemplate = (rowData) => {
    return (
      <div className="space-x-3">
        <Button
          onClick={() => setSelectedCharacter(rowData)}
          label="Edit"
          rounded
          text
          severity="info"
          aria-label="Edit"
        />
        <Button onClick={() => dispatch(deleteCharacter(rowData.id))} label="Remove" icon="pi-times" rounded text severity="danger" aria-label="Delete" />
      </div>
    );
  };

  return (
    <div className="container">
      <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
        <Column
          key={COLUMNS[0].id}
          sortable={COLUMNS[0].sortable}
          field={COLUMNS[0].selector}
          header={COLUMNS[0].header}
        />
        <Column
          key={COLUMNS[1].id}
          sortable={COLUMNS[1].sortable}
          field={COLUMNS[1].selector}
          header={COLUMNS[1].header}
          body={categoryTemplate}
        />
        <Column
          key={COLUMNS[2].id}
          sortable={COLUMNS[2].sortable}
          field={COLUMNS[2].selector}
          header={COLUMNS[2].header}
          body={actionsTemplate}
        />
      </DataTable>
      <EditDialog
        visible={!!selectedCharacter}
        onHide={() => setSelectedCharacter(null)}
        selectedCharacter={selectedCharacter}
      />
    </div>
  );
}
