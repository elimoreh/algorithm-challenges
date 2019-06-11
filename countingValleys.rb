def countingValleys(n, s)
i = 0 
alt = 0
count = 0 
    while i < s.length
            if alt == 0 && s[i] == "D"
            count +=1
            end
                if s[i]== "D"
                alt -= 1
                elsif s[i]== "U"
                alt += 1
                end
    i += 1 
    end
    return count 
end

link : https://www.hackerrank.com/challenges/counting-valleys/problem