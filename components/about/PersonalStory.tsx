import Link from "next/link";
import { photos, videos, profile } from "@/data/profile";
import { MediaCard } from "@/components/media/MediaCard";
export function PersonalStory() {
  const photo = (id: string) => photos.find((item) => item.id === id)!;
  return (
    <div id="beyond-code">
      <section className="section container personal-section" id="music">
        <div className="section-heading">
          <div>
            <p className="section-index">03 / Beyond code</p>
            <h2>
              Music is
              <br />
              the constant.
            </h2>
          </div>
          <p className="section-description">
            I’ve had a guitar in my hands for {profile.music.guitarYears} years.
            Keyboard came later, then ukulele, singing, and a growing interest
            in recording the ideas that stick.
          </p>
        </div>
        <div className="music-composition">
          <MediaCard photo={photo("guitar")} className="music-feature" />
          <div className="bento-card recording-card">
            <p className="eyebrow">Music & recording</p>
            <h3>
              From a few chords
              <br />
              to a recorded session.
            </h3>
            <div className="music-years">
              <p>
                <strong>{profile.music.guitarYears}</strong>
                <span>years on guitar</span>
              </p>
              <p>
                <strong>{profile.music.keyboardYears}</strong>
                <span>years on keys</span>
              </p>
            </div>
            <p>I also sing and play ukulele. {profile.music.recording}</p>
            <p className="section-index">DAWs I’ve worked with</p>
            <ul className="skill-list">
              {profile.music.daws.map((daw) => (
                <li key={daw}>{daw}</li>
              ))}
            </ul>
            <Link href="/?topic=music#contact" className="text-link">
              Want to make music together? ↗
            </Link>
          </div>
          <MediaCard photo={photo("ukulele")} className="ukulele-feature" />
        </div>
        <div className="personal-video-grid">
          {videos
            .filter((v) => v.category === "music")
            .map((video) => (
              <MediaCard key={video.youtubeId} video={video} />
            ))}
        </div>
        <p className="personal-postscript">
          Playing together, recording something, or talking guitar, piano,
          ukulele, FL Studio, GarageBand, or Logic Pro —{" "}
          <Link href="/?topic=music#contact">I’m up for a conversation ↗</Link>
        </p>
      </section>
      <section className="section container personal-section" id="road">
        <div className="section-heading">
          <div>
            <p className="section-index">04 / Machines & the road</p>
            <h2>
              Two wheels.
              <br />
              And a manual gearbox.
            </h2>
          </div>
          <p className="section-description">
            I’ve ridden motorcycles for around {profile.road.ridingYears} years.
            They’re my favourite way to explore, but I also drive cars and am
            comfortable with manual transmission.
          </p>
        </div>
        <div className="road-composition">
          <MediaCard photo={photo("bike")} />
          <MediaCard photo={photo("bike-travel")} />
          <MediaCard photo={photo("car")} />
        </div>
        <div className="road-note">
          <h3>Into bikes or cars?</h3>
          <p>
            I’m happy to talk motorcycles, cars, riding, driving, ownership,
            road trips, and beginner learning resources. Just a conversation
            between people who enjoy the machines and the journey.
          </p>
          <Link className="text-link" href="/?topic=automotive#contact">
            Let’s talk shop ↗
          </Link>
        </div>
        <div className="personal-video-grid">
          {videos
            .filter((v) => v.category === "road")
            .map((video) => (
              <MediaCard key={video.youtubeId} video={video} />
            ))}
        </div>
      </section>
      <section className="section container personal-section" id="travel">
        <div className="section-heading">
          <div>
            <p className="section-index">05 / A wider perspective</p>
            <h2>
              More of Bangladesh.
              <br />
              One trip at a time.
            </h2>
          </div>
          <p className="section-description">
            Motorcycle travel, trekking, and time outdoors. Sometimes I take a
            guitar, sometimes just a change of clothes and a reason to leave the
            desk.
          </p>
        </div>
        <div className="travel-composition">
          <MediaCard photo={photo("travel")} />
          <div className="bento-card">
            <p className="eyebrow">Places along the way</p>
            <h3>
              A few familiar
              <br />
              destinations.
            </h3>
            <ul className="place-list">
              {profile.places.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
            <p>Hills, haors, the coast, and the roads between them.</p>
          </div>
        </div>
        <div className="personal-video-grid travel-videos">
          {videos
            .filter((v) => v.category === "travel")
            .map((video) => (
              <MediaCard key={video.youtubeId} video={video} />
            ))}
        </div>
        <div className="personal-postscript">
          <p>More sessions and moments from the road.</p>
          <a className="text-link" href={profile.socials.youtube}>
            Visit my YouTube channel ↗
          </a>
        </div>
      </section>
    </div>
  );
}
