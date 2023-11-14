import { GithubPartial } from '../../common/icons/GithubPartial'
import './TicketProyect.css'

export const TicketProyect = () => {
  return (
    <div className="ticket-visual_visual" id="ticket">
      <div className="left"></div>
      <div className="right"></div>
      <div className="ticket-visual-wrapper">
        <div className="ticket-visual_profile">
          <div className="ticket-profile_profile">
            <img
              src="https://github.com/madflows.png"
              alt="madflows"
              className="ticket-profile_image"
            />
            <div className="ticket-profile_text">
              <p className="ticket-profile_name">Folarin Lawal</p>
              <p className="ticket-profile_username">
                <span className="ticket-profile_githubIcon">
                  <img src="./github.svg" alt="" />
                </span>
                madflows
              </p>
            </div>
          </div>
          <div className="ticket-event">
            <img src="./event-logos.png" />
          </div>
          <div className="ticket-visual_ticket-number-wrapper">
            <div className="ticket-visual_ticket-number flex justify-end p-2">
              <GithubPartial width='50px' height='50px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
