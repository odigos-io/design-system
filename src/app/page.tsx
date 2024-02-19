'use client';
import React, { useState } from 'react';
import { Card } from '../design.system/card/card';
import { Text } from '../design.system/text/text';
import {
  DropDown,
  Input,
  Loader,
  Modal,
  RadioButton,
  SegmentedControls,
  Tag,
} from '..';
import { ModalPositionX, ModalPositionY } from '@/design.system/modal/types';
import { MultiInput } from '@/design.system/multi-input';
import { KeyValueTable } from '@/design.system/key-value-input';
export default function Home() {
  const [selected, setSelected] = useState('sources');
  const [keyValues, setKeyValues] = useState([
    {
      id: 0,
      key: '',
      value: '',
    },
  ]);
  const options = [
    {
      label: 'Sources',
      id: 'sources',
    },
    {
      label: 'Namespaces',
      id: 'namespaces',
    },
  ];
  const modalConfig = {
    title: 'Create new token',
    showHeader: true,
    showOverlay: true,
    positionX: ModalPositionX.center,
    positionY: ModalPositionY.center,
    padding: '20px',
    footer: {
      primaryBtnText: 'Create',
      primaryBtnAction: () => {},
      style: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      link: {
        text: 'Learn more',
        onClick: () => {},
      },
    },
  };

  const handleListChange = (newList: string[]) => {
    console.log('List changed:', newList);
  };

  return (
    <div style={{ background: '#0E1C28', padding: 50 }}>
      <Input
        label="Token name"
        value={''}
        placeholder="Name of the token Name of the token"
        onChange={(value) => {}}
      />
      <KeyValueTable
        title="dfsdf"
        keyValues={keyValues}
        setKeyValues={setKeyValues}
        tooltip={''}
      />
      <div style={{ width: 800, height: 150 }}>
        <MultiInput onListChange={handleListChange} initialList={[]} />
      </div>
      <div>
        <DropDown
          label="test"
          tooltip="test"
          required
          data={[
            { label: 'Option 1', id: 'option1' },
            { label: 'Option 2', id: 'option2' },
            { label: 'Option 3', id: 'option3' },
          ]}
          value={{ label: 'Option 1', id: 'option1' }}
          onChange={(value) => {}}
        />
        <DropDown
          data={[
            { label: 'Option 1', id: 'option1' },
            { label: 'Option 2', id: 'option2' },
            { label: 'Option 3', id: 'option3' },
          ]}
          value={{ label: 'Option 1', id: 'option1' }}
          onChange={(value) => {}}
        />
      </div>
      {/*
      <Modal show={true} config={modalConfig} closeModal={() => {}}>
        <div></div>
      </Modal>
      <br />
      <br />
      <br />
      <br />
      <RadioButton label={'test'} onChange={() => {}} value={true} />
      <br />
      <br />
      <br />
      <Card
        type={'secondary'}
        header={{
          body: () => (
            <div
              style={{
                width: 600,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            ></div>
          ),
        }}
      >
        <SegmentedControls
          options={options}
          selected={selected}
          onChange={function (selected: string): void {
            setSelected(selected);
          }}
        />
        <Loader width={100} height={100} />
        <Tag title={'#tag'} />
        <div style={{ width: 600, height: 600 }}></div>
      </Card> */}
    </div>
  );
}
