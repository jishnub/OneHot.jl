var documenterSearchIndex = {"docs":
[{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"EditURL = \"https://github.com/cossio/OneHot.jl/blob/master/docs/src/literate/matmul.jl\"","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"Let's load some packages","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"using OneHot, CairoMakie, Random, BenchmarkTools\nnothing #hide","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"Setup the size of the examples we'll look at","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"q = 20\nN = 200\nM = 400\nnothing #hide","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"Benchmark normal matrix multiply. This doesn't exploit OneHot structure of X.","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"@benchmark A * X setup=(A=randn(M,q); X=Array(OneHotArray(rand(1:q, N), q)))","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"This package implements efficient matrix multiply by a OneHotArray.","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"@benchmark A * X setup=(A=randn(M,q); X=OneHotArray(rand(1:q, N), q))","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"That's about 20x faster! We can also check that these two codes are computing the same thing.","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"A = randn(M, q)\nX = OneHotArray(rand(1:q, N), q)\nA * X ≈ A * Array(X)","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"","category":"page"},{"location":"literate/matmul/","page":"Matrix multiplication","title":"Matrix multiplication","text":"This page was generated using Literate.jl.","category":"page"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [OneHot]","category":"page"},{"location":"reference/#OneHot.OneHotArray","page":"Reference","title":"OneHot.OneHotArray","text":"OneHotArray\n\nA type to hold a one-hot encoded array efficiently. Implements efficient matrix multiplication.\n\n\n\n\n\n","category":"type"},{"location":"reference/#OneHot.argmax_-Tuple{AbstractArray}","page":"Reference","title":"OneHot.argmax_","text":"argmax_(A; dims)\n\nIndex of maximum elements of A over given dims, dropping the reduced dims.\n\n\n\n\n\n","category":"method"},{"location":"reference/#OneHot.decode-Tuple{AbstractArray}","page":"Reference","title":"OneHot.decode","text":"decode(X)\n\nReturns an array A such that OneHot.encode(A, 1:q) == X. Here q = size(X, 1) is interpreted as the number of classes.\n\n\n\n\n\n","category":"method"},{"location":"reference/#OneHot.encode","page":"Reference","title":"OneHot.encode","text":"encode(data, labels)\n\nReturns a one-hot encoded version of data, where classes are indexed according to labels.\n\n\n\n\n\n","category":"function"},{"location":"reference/#OneHot.tensormul-Tuple{AbstractArray, AbstractArray, Int64}","page":"Reference","title":"OneHot.tensormul","text":"tensormul(A, B, dims)\n\nA*B contracting first dims dimensions of A with first dims dimensions of B (which must match). Exploits the fact that some of the tensors are OneHotArray.\n\n\n\n\n\n","category":"method"},{"location":"#OneHot.jl","page":"Home","title":"OneHot.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for OneHot.jl, a Julia package to encode categorical data as one-hot arrays. This package exports only one symbol, OneHotArray.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
