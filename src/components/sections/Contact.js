import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaRegCopy } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "rmor760@wgu.edu";
  const linkedin = "https://linkedin.com/in/RobertMorganSE"
  const github = "https://github.com/robertmorgan-se"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-sm space-y-6 text-gray-800">
      <p>
        I'm currently open to full-time or part-time roles, freelance work, and collaborative projects.
        Feel free to reach out via email or connect with me through GitHub or LinkedIn.
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:gap-x-8 gap-y-4">
        {/* Email */}
        <div className="flex items-center gap-1.5">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-500 transition duration-150"
          >
            <FaEnvelope className="w-6 h-6" />
            <span className="font-medium">Email</span>
          </a>
          <button
            onClick={copyToClipboard}
            className="cursor-pointer text-slate-700 hover:text-slate-500 transition duration-150 flex items-center gap-1"
            title="Copy email"
          >
            <FaRegCopy className="w-3 h-3" />
            <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        {/* GitHub */}
        <div>
          <a
            href={`${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-700 hover:text-slate-500 transition duration-150"
          >
            <FaGithub className="w-6 h-6" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>

        {/* LinkedIn */}
        <div>
          <a
            href={`${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-700 hover:text-slate-500 transition duration-150"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
