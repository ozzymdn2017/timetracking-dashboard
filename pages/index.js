import Head from 'next/head'
import Image from 'next/image'

const activities = [
  {
    id: 1,
    name: 'work',
    time: '32hrs',
    previousTime: '36hrs',
    bg: 'bg-skin-card-work rounded-lg w-full pt-8',
    icon: '/icon-work.svg',
    alt: 'Work Icon'
  },
  {
    id: 2,
    name: 'play',
    time: '32hrs',
    previousTime: '36hrs',
    bg: 'bg-skin-card-play rounded-lg pt-8',
    icon: '/icon-play.svg',
    alt: 'Play Icon'
  },
  {
    id: 3,
    name: 'study',
    time: '32hrs',
    previousTime: '36hrs',
    bg: 'bg-skin-card-study rounded-lg pt-8',
    icon: '/icon-study.svg',
    alt: 'Study Icon'
  },
  {
    id: 4,
    name: 'exercise',
    time: '32hrs',
    previousTime: '36hrs',
    bg: 'bg-skin-card-exercise rounded-lg pt-8',
    icon: '/icon-exercise.svg',
    alt: 'Exercise Icon'
  },
  {
    id: 5,
    name: 'social',
    time: '32hrs',
    previousTime: '36hrs',
    bg: 'bg-skin-card-social rounded-lg pt-8',
    icon: '/icon-social.svg',
    alt: 'Social Icon'
  },
  {
    id: 6,
    name: 'self care',
    time: '32hrs',
    previousTime: '36hrs',
    bg: 'bg-skin-card-selfcare rounded-lg pt-8',
    icon: '/icon-self-care.svg',
    alt: 'Self Care Icon'
  },
]


export default function Home() {
  return (
    <div className="bg-skin-fill min-h-screen grid place-content-center mx-auto">
      <Head>
        <title>Timetracking Dashboard</title>
        <meta name="description" content="Simple dashboard to track time and activities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       
        <div className="relative text-skin-muted">
          <div className="relative bg-skin-card-accent py-4 px-12 flex gap-2 space-x-4 rounded-2xl">
            <Image src="/image-jeremy.png" height="64" width="64" alt="Thumbnail Photo"/>
            <h1 className="font-light">Report for <span className="block font-semibold">Jeremy Robson</span></h1>
          </div>
          <div className="w-full rounded-2xl bg-skin-card-accent-hover flex justify-between p-6 -mt-4 font-light">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
          </div>
          <div className="w-full space-y-8 relative mt-4">
          {activities.map((activity) => (
            <div key={activity.id} className={activity.bg} >
              <div className="absolute w-full flex justify-end -ml-2 -mt-8">
                <Image src={activity.icon} alt={activity.icon} height={64} width={64} />
              </div>
              <div className="relative bg-skin-card-accent-hover py-10 rounded-lg capitalize">
                <span className="absolute top-3 left-3">{activity.name}</span>
                <span className="absolute bottom-3 left-3">{activity.time}</span>
                <span className="absolute bottom-3 right-3">{activity.previousTime}</span>
                <svg className="absolute top-6 right-3" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/></svg>
              </div>
            </div>
          ))}  
          </div>
        </div>
    </div>
  )
}
