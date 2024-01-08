export default function ModeSelection({ setDifficulty1, setDifficulty2, mode, setMode, onFinish }) {
    function onSubmit(e) {
        e.preventDefault();
        onFinish();
    }
    return (
        <form onSubmit={onSubmit}>
            {(mode === 'human-ai' || mode === 'ai-ai') && <select onChange={(e) => setDifficulty1(e.target.value)}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>}
            {mode === 'ai-ai' && <select onChange={(e) => setDifficulty2(e.target.value)}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>}
            <select onChange={(e) => setMode(e.target.value)}>
                <option value='human-human'>Human - Human</option>
                <option value='human-ai'>Human - Ai</option>
                <option value='ai-ai'>Ai - Ai</option>
            </select>
            <input type="submit" value="Play" />
        </form>
    )
}