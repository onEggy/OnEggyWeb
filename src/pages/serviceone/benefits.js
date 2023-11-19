import React from "react";
import Headline from "../components/headline";

const benefits = () => {
  const title = "Benefits";
  const desc =
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies";
  return (
    <div className="benefits">
      <Headline title={title} desc={desc} />

      {/* cards grid of benefits */}
      <div className="benefits-cards">
        <div className="benefits-card">
          <div className="benefits-card-icon">
            <svg
              id="mysvg"
              width={44}
              height={45}
              viewBox="0 0 44 45"
              fill="none"
            >
              <mask
                id="mask0_806_980"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={44}
                height={45}
              >
                <rect width={44} height={45} fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_806_980)">
                <rect x={-25} y={-12} width={138} height={107} fill="black" />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_806_980"
                    transform="scale(0.0227273 0.0222222)"
                  />
                </pattern>
                <image
                  id="image0_806_980"
                  width={44}
                  height={45}
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <p>
            Reliable infrastructure
            <br />
            deployment with Fewer Errors
          </p>
        </div>
        <div className="benefits-card">
          <div className="benefits-card-icon">
            <svg
              width={44}
              height={45}
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_808_1702"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={44}
                height={45}
              >
                <rect width={44} height={45} fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_808_1702)">
                <rect x={-25} y={-12} width={138} height={107} fill="white" />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_808_1702"
                    transform="scale(0.0227273 0.0222222)"
                  />
                </pattern>
                <image
                  id="image0_808_1702"
                  width={44}
                  height={45}
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <p>Multi-cloud &amp; On-prem Support</p>
        </div>
        <div className="benefits-card">
          <div className="benefits-card-icon">
            <svg
              width={44}
              height={45}
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_808_1702"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={44}
                height={45}
              >
                <rect width={44} height={45} fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_808_1702)">
                <rect x={-25} y={-12} width={138} height={107} fill="white" />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_808_1702"
                    transform="scale(0.0227273 0.0222222)"
                  />
                </pattern>
                <image
                  id="image0_808_1702"
                  width={44}
                  height={45}
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <p>Manage Infrastructure as Code (IaC)</p>
        </div>
        <div className="benefits-card">
          <div className="benefits-card-icon">
            <svg
              width={44}
              height={45}
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_806_980"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={44}
                height={45}
              >
                <rect width={44} height={45} fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_806_980)">
                <rect x={-25} y={-12} width={138} height={107} fill="black" />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_806_980"
                    transform="scale(0.0227273 0.0222222)"
                  />
                </pattern>
                <image
                  id="image0_806_980"
                  width={44}
                  height={45}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAGz0lEQVRoBb1ZZ6hdRRC+auxdidHYkrx7ZmxgwYZiSbCg/rGgUWyoiB2NmuSHqFfRZ+7Mfe/F2AtRRCzRKEIEC5ZYMMaY2IiIIVgSG/jDFg2WT2b3nD17zy3v3vuePnicPbPffDtndndmdm+pNIp/qDJDaA6E34Myov9vIPQshKaO4nAjo4LQrZGBsbGFNv0E5dvRv9u2IxuxR230l8dCaVEwVugHKN8CTc6DlI+B0unQZDqEng8Y877hJDmlx2F7U8Ntu2wN4S9zQ5LrMLjTxq3YMLjTNhC+BMI/Bx2hG1rhR10OpQVuYKHfUaPjOh0Ag31lKH3ujaa/oH17darbEc55UulCv3H4VQg/CqWHg5c0Oa8jogiEOeUt8tmhpVFX702gtA6UrobSH7lxdbsftn57HQG18rGBV+j4XnmCXr0X+VcIPw2hm1L5EthSkElJUOihAaVH0qVxfw/quQqUTgpfr3QXdNymee/otVBLDk/H+XFErFB+2xEJvzoiomGUIRO2jxzTDykf0ZNzAkmVTmw3pgtVSotRo0tjHKo8GUrz/YZNDoLQnRiasFWMydouJtdnRovTD1g0yTBtn6jy/rnBPL4V2LIVlD70M0HvxjgIfeI56EYIv5W2P2yW4VCjc6EuAxayoksww29GCB0WDK6M3yQ2JGujyuOh/FlqyF+240Of0NSgL+X9oMlRUIu3FmHoU9PNsPETQ8kk1JKTofxC0DediDvGuzaUp0D546Ag5b4iKI3LXwWM8mkZBpXSuhBanhr3SpBLckaOp5WYNWnLrK/ZE5qcAOVfnI7Qdw3LCZXxm0DpmZzUxdunmpLVkqNzHD0ZY3ztkMbqKk+u6xOeF/QKfTEua0OTgwJe+d5MXkJlwkZQWph30suolg8OgEID80rrQeilgJfkWoOk3l3h5MLvx2quAMo2lvCLlpTi/lZtCA36cegfaN92Dgfh58LgSpe3Uo7lbkbCZnKb4zIInxp4oswF4Ssj+RvmoJirXduWQtDVZHoJkuyTC3hmO+ViH6q8eV6s08K8Jq6vDSD0jh+DFuGusZsVeYZ7h9Ljqf6CEpTnuhfh1cMpNuu3zYMqXeNCoS83Z2CA9o6xqNKB0OQ6K3hieadtX8+4ffFZCcIfpdb3d0rQDgctHwml+2E725JFDx4t8udLjdaYh32wrvKZRWC371DWwJfxCs/rlqeItyyaroIvI4Pbp+AiSfEdwucHY4VqzruZ0bXk4iK+m3doMuQNpidKUPogHUi6IYmxqE3cNQR5pcezPig/lX9Esk8m7/YJ5W9Sg6eZh69PXz7plijDQ+lNz8HfWjEU5O4MR9+l/MszeTdPKF/g9G22BvoOKVkBHgRRiu2UFELTgn6NjsNA385QusMFfGubLFsayrd0yms4DO26Q14U0cKQbKD0YEr6azcHQgxMInfq8AbN9QURrYLQ1xD+1j1nTxwHoYeC0YWQ1+oDnCPzCLaqrspzqTmUg5a1fKptRZbJQ9IwAy2J2P2Dnf8qpTGYU94wPQte5ftolTe6PqlkXNnT7we6I3ygHcOalQmQcl9eZVmoozW+fLQMxq83/tOyQJoWMnBHKfo8DC60wqKFvadVoA+hQssa+NxlDH0fOG3WhN6wkjPja3imRc20fN2kMTpfg80KbGeQN8rOfs0Ndv3Cd9cZ1IpX+DcoXxXWbIOlTQRpjXEWhG6AUiX/j5KDeTAqZNp52Bnsq8KVudHJrJzXLaeTutlDTcxuFCF4if5BjQ6IEcMZ7IwWPhRqpaKb8jA7Mc+otevWoXJDounEYG801YKXhQ8dNQNjIjt6Q3h16pnlqOyxQdzvDGmz6WKs6UYb/IuejvUxYbO2q8DcNPKfxfIxw0N4tlVp9u6uudzVazKU9cdP44DQ394BfE/cN+J2/VKgSitCKF3up9qKFYsYFmWSi1rjk5s9xkWjKa1wXcnTW0a/FKxQqpTGtCKwu2EXO/Nw9Vrb+2JLMFnx5ZbbKFyHRSeStagmu7cytle5cUJ4rfc0jfBCsK5wSaZ3YhRmlfd0t5sW/gbK+3akozxzxEvDLQXNUiUt7iTr4L7S+unR6AeYrv00MKe84XBGu+sBu5/zm3p1T1EjquBgdcZwg1o/BmlHPyidgxqd7dsTtu9M135GCKVAfmnSkbK/N/N1Q+FWsp1+GspW+B9dbHbo03b4Yl8eZRhWCxf7W77XhbHoBNFSIepw5aHQY1Dqb7gPi3DNmv42NPWylI9ohmkqsyuhfHpovv8AO77/l/88xf0kkS2Lbn94dOVdpvx/PyW5oqknhxNCeAaUlubeDpuisS4enY9aYrc87ez6F6maQFZYzf1hAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </div>
          <p>
            Reliable infrastructure
            <br />
            deployment with Fewer Errors
          </p>
        </div>
        <div className="benefits-card">
          <div className="benefits-card-icon">
            <svg
              width={44}
              height={45}
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_808_1702"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={44}
                height={45}
              >
                <rect width={44} height={45} fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_808_1702)">
                <rect x={-25} y={-12} width={138} height={107} fill="white" />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_808_1702"
                    transform="scale(0.0227273 0.0222222)"
                  />
                </pattern>
                <image
                  id="image0_808_1702"
                  width={44}
                  height={45}
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <p>
            Reliable infrastructure
            <br />
            deployment with Fewer Errors
          </p>
        </div>
        <div className="benefits-card">
          <div className="benefits-card-icon">
            <svg
              width={44}
              height={45}
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_808_1702"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={44}
                height={45}
              >
                <rect width={44} height={45} fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_808_1702)">
                <rect x={-25} y={-12} width={138} height={107} fill="white" />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_808_1702"
                    transform="scale(0.0227273 0.0222222)"
                  />
                </pattern>
                <image
                  id="image0_808_1702"
                  width={44}
                  height={45}
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <p>
            Reliable infrastructure
            <br />
            deployment with Fewer Errors
          </p>
        </div>
      </div>
      {/* benefits secured div */}
      <div className="secured">
        <div className="secured-left">
          <div className="left-card">
            <p>Secured</p>
            <p>Standardized</p>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={41}
                viewBox="0 0 41 41"
                fill="none"
              >
                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#37FFF4"
                />
              </svg>
              How?
            </a>
          </div>
        </div>
        <div className="secured-right">
          <h1>How we do it?</h1>
          <p>
            Your search for owning a website that is standard, secured and
            provides ease in growing your business virtually to get the top
            place in the industry ends here, at Code Theorem. Our talented tech
            geeks will drive you through the whole website development solutions
            to achieve your desired result of having a custom website.
          </p>
        </div>
      </div>
    </div>
  );
};
export default benefits;
