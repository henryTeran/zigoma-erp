import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPassword() {
  const { email, setEmail, handleReset, success } = useForgotPassword();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-800">
      <div className="w-full max-w-sm">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
          <div className="p-4 sm:p-7">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Réinitialiser le mot de passe</h1>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mt-1">
                Saisis ton adresse email pour recevoir un lien de réinitialisation.
              </p>
            </div>

            {success ? (
              <div className="text-green-600 font-medium text-sm text-center">
                ✅ Un email de réinitialisation a été envoyé !
              </div>
            ) : (
              <form onSubmit={handleReset}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="py-2.5 px-4 w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
                >
                  Envoyer le lien
                </button>
              </form>
            )}

            <div className="mt-4 text-sm text-center text-gray-600 dark:text-neutral-400">
              <a href="/login" className="text-blue-600 hover:underline dark:text-blue-500">
                Retour à la connexion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
