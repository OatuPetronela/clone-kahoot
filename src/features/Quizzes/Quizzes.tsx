export function Quizzes() {
  return (
    <div className="flex flex-col gap-1 text-left mb-6">
      <label className="text-sm" htmlFor="quizzes">
        Quizzes
        </label>
        <input
            className="text-sm rounded border border-steel-gray px-2 py-3 focus:bg-quiz-purple focus:text-white"
            type="text"
            id="quizzes"
            name="quizzes"
            placeholder="Quizzes"
        />
    </div>
    
    )
}