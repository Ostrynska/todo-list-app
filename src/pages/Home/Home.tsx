import React, { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import ToDoList from '../../components/ToDoList/ToDoList';
import CompletedList from '../../components/CompleatedList/CompletedList';

const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'removed'>('all');

    return (
        <>
            <h1 style={{ display: 'none' }}>To-do List App</h1>
            <section>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === 'all' ? <ToDoList /> : <CompletedList />}
            </section>
        </>
    );
};

export default Home;
