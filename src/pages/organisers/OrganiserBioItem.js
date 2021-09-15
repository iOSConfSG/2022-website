import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"

function OrganiserBioItem (props) {
  const { organiser } = props

  const hasLinkedIn = (organiser && Object.prototype.hasOwnProperty.call(organiser, 'linkedin') && organiser.linkedin !== '')
  const hasTwitter = (organiser && Object.prototype.hasOwnProperty.call(organiser, 'twitter') && organiser.twitter !== '')

  return (
    <div className="space-y-6">
      { organiser &&
        <>
          <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={organiser.imageUrl} />
          <div className="space-y-2">
            <div className="flex-col justify-center text-lg leading-6 font-medium space-y-1">
              <h4 className="text-center">{organiser.name}</h4>              
              <div className="flex justify-center">
                {hasTwitter && <Link to={`https://www.twitter.com/${organiser.twitter}`}><FontAwesomeIcon size="1x" icon={faTwitter} /> @{organiser.twitter}</Link>}
                {hasLinkedIn && <Link className="ml-1" to={`https://www.linkedin.com/${organiser.linkedin}`}><FontAwesomeIcon size="1x" icon={faLinkedin} /> {organiser.linkedin}</Link>}
              </div>
              {
                organiser.bio &&
                <p className="text-sm font-light">{organiser.bio}</p>
              }              
            </div>
          </div>
        </>
      }
    </div>
  )
}

OrganiserBioItem.propTypes = {
  organiser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    bio: PropTypes.string,
  })
}

export default OrganiserBioItem
