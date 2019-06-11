def jumpingOnClouds(c)
i = 0 
jump_count = 0
    while i < c.length
        if c[i+2] == 0
        i += 2
        jump_count += 1
        else
        i += 1
        jump_count += 1
        end
    end
return (jump_count - 1)
end

link: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem