'use client;'

// src/common/CardSkeleton.jsx
import React from "react";
import { Card, Skeleton } from "@heroui/react";

export default function CardSkeleton() {
  return (
    <Card className="w-[380px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 bg-default-300 rounded-lg" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 bg-default-200 rounded-lg" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 bg-default-200 rounded-lg" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 bg-default-300 rounded-lg" />
        </Skeleton>
      </div>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 bg-default-200 rounded-lg" />
        </Skeleton>
      </div>
    </Card>
  );
}
