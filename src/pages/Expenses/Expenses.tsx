import React from 'react'
import ActivityForm from '../../components/UI/ActivityForm'
export default function Expenses() {
    return <div>
        <section>
            <h1>Expenses</h1>
        </section>
        <section>
            <p>Here you can manage your expenses.</p>
            <ActivityForm />
        </section>
    </div>
}