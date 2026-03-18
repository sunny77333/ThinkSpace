import { Ratelimit  } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

//Create a ratelimiter that only allows 30 requests per 20 seconds

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(30,"20 s")
})

export default ratelimit;