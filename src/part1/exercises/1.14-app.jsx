import { useEffect, useState } from 'react'

const App1_14 = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const [mostVoted, setMostVoted] = useState(0)

    const handleAnecdote = (anecdotes) => setSelected(Math.floor(Math.random() * anecdotes.length))
    const handleVote = (votes, selected) => {
        const copy = [...votes];
        copy[selected] += 1;
        setVotes(copy);
    }

    useEffect(() => {
        const getMostVoted = () => {
            const MaxVotes = Math.max(...votes);
            return votes.indexOf(MaxVotes);
        }

        setMostVoted(getMostVoted());
    }, [votes])

    return (
        <>
            <div>
                <h1>Anecdotes</h1>
                <p>{anecdotes[selected]}</p>
                <p>Votes: {votes[selected]}</p>
                <button onClick={() => handleVote(votes, selected)}>Vote +</button>
                <button onClick={() => handleAnecdote(anecdotes)}>Lucky Anecdote</button>
            </div>
            <div>
            <h2>Most voted Anecdote</h2>
            <p>{anecdotes[mostVoted]}</p>
            <p>Votes: {votes[mostVoted]}</p>
            </div>
        </>
    )
}

export default App1_14