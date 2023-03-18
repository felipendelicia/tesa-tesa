import sendEmail from "../services/sendEmail"

export default function Contact() {
  return (
    <div className="pepe">
      <button
        onClick={()=>sendEmail(
          'lucadelicia05@gmail.com',
          'Test Email',
          'Hello, my name is Felipe and i am testing Sendinblue'
        )}
      >
        Send EMAIL
      </button>
    </div>
  )
}
