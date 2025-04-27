import { PropsWithChildren } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/Dialog"

interface DialogManagerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  maxWidth?: string
}

/**
 * DialogManager 컴포넌트
 * @param open Dialog 열림 여부
 * @param onOpenChange Dialog 열림 여부 변경 함수
 * @param title Dialog 제목
 * @param maxWidth Dialog 최대 너비
 * @param children Dialog 내용
 * @returns
 */
export const DialogManager = ({
  open,
  onOpenChange,
  title,
  maxWidth,
  children,
}: PropsWithChildren<DialogManagerProps>) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={maxWidth}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
