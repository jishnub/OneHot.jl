using SafeTestsets

@safetestset "array" begin include("array.jl") end
@safetestset "util" begin include("util.jl") end
